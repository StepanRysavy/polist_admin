import {nonEmpty} from '@/components/form/validators/validators';

var obj = {
  name: 'validation',
  props: ['value', 'validators', 'force', 'validateOnlyIfNotEmpty']
}

obj.data = function () {
  return {
    error: [],
    lastValue: undefined,
    valid: true,
    validateOnlyIfContent: this.validateOnlyIfNotEmpty || false
  }
}

obj.methods = {
  validateResult: function (valid) {
    this.valid = valid;
    this.$emit("validated", valid);
  },
  validateAsTrueIfNoContent: function (valid) {
    if (nonEmpty({value: this.value})) {
      this.validateResult(true);
    } else {
      this.validateResult(valid);
    }
  },
  validate: function () {

    if (this.lastValue === this.value) {
      this.$emit("validated", this.valid);
      return;
    }
    this.lastValue = this.value;

    var list = [];

    this.validators.forEach((fn) => {
      list.push(fn({value: this.value}));
    });

    Promise.all(list).then(tests => {
      var valid = true;

      this.error = [];

      tests.forEach(test => {
        if (test.result === false) {
          valid = false;
          this.error.push(test.message);
        }
      });

      if (this.validateOnlyIfContent === true && valid === false) {
        this.validateAsTrueIfNoContent(valid);
      } else {
        this.validateResult(valid);
      }
    });
  }
}

obj.watch = {
  value: function () {
    this.validate();
  },
  force: function () {
    this.validate();
  }
}

obj.mounted = function () {
  this.validate();
}

export default obj;
