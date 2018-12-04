import Validation from '@/components/form/validation/do';

const obj = {};

obj.name = 'form-input-radio';
obj.props = ['data'];

obj.components = {
	'show-validation': Validation
}

obj.data = function () {
	return {
    sharedName: 'RADIO_' + this._uid,
		value: this.data.value,
		iterate: 0
  }
};

obj.computed = {
  inputListeners: function () {
    var vm = this
    // `Object.assign` merges objects together to form a new object
    return Object.assign({},
      // We add all the listeners from the parent
      this.$listeners,
      // Then we can add custom listeners or override the
      // behavior of some listeners.
      {
        // This ensures that the component works with v-model
        change: function (event) {
          vm.data.value = event.target._value;
          vm.value = vm.data.value;
        }
      }
    )
  }
}

obj.methods = {
	onValidation: function (data) {
		this.data.valid = data;
		this.$emit('update');
	}
}

obj.watch = {
	data: function () {
		this.iterate++;
	}
}

export default obj;
