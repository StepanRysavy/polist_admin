import Validation from '@/components/form/validation/do';
import UploadDropzone from "@/components/upload-dropzone/do";

const obj = {};

obj.name = 'form-input-img';
obj.props = ['data'];

obj.components = {
  'upload-dropzone': UploadDropzone,
	'show-validation': Validation
}

obj.data = function () {
	return {
		value: this.data.value,
		editable: false,
		iterate: 0
  }
};

obj.computed = {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        {
          input: function (event) {
            vm.data.value = event.target.value;
            vm.value = vm.data.value;
          }
        }
      )
    }
}

obj.methods = {
	onValidation: function (data) {
		this.data.valid = data;
		this.idValid = data;
		this.$emit('update');
	},
	onDropzone: function (data) {
		this.data.value = data.src;
		this.value = this.data.value;
	}
}

obj.watch = {
	data: function () {
		this.iterate++;
	}
}

export default obj;
