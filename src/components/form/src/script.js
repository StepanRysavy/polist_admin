import ButtonConfirm from "@/components/buttons/button-confirm/do";

import FormInputText from "../inputs/form-input-text/do";
import FormInputTextArea from "../inputs/form-input-textarea/do";
import FormInputCheckbox from "../inputs/form-input-checkbox/do";
import FormInputRadio from "../inputs/form-input-radio/do";
import FormInputSelect from "../inputs/form-input-select/do";
import FormInputLabel from "../inputs/form-input-label/do";
import FormInputImg from "../inputs/form-input-img/do";

import {nonEmpty, email, radio, select, url} from '@/components/form/validators/validators';

const obj = {};

obj.name = 'form-basic';
obj.props = ['data', 'compact', 'autosave'];
obj.components = {
	'form-input-text': FormInputText,
	'form-input-textarea': FormInputTextArea,
	'form-input-checkbox': FormInputCheckbox,
	'form-input-radio': FormInputRadio,
	'form-input-select': FormInputSelect,
	'form-input-label': FormInputLabel,
	'form-input-img': FormInputImg,
	'button-confirm': ButtonConfirm
};

obj.data = function () {
	return {
		valid: false
	}
};

obj.computed = {
	showCompact: function () {
		if (typeof this.compact != "undefined") {
			if (this.compact === "") {
				return true;
			} else {
				return this.compact;
			}
		} else {
			return false;
		}
	},
	doAutosave: function () {

		var a = true;

		if (typeof this.autosave != "undefined") {
			if (this.autosave === "") {
				a = true;
			} else {
				a = this.autosave;
			}
		} else {
			a = false;
		}

		if (a === true) {
			var btn = this.data.buttons.find(b => b.type === "confirm" && b.onClick);

			if (btn) {
				return btn.onClick;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
}

obj.methods = {
	autosaveIfEnabled: function () {
		if (this.valid === true && this.doAutosave != null) {
			this.doAutosave();
		}
	},
	validateForm: function () {
		var valid = true;

		this.data.fields.forEach(field => {
			if (field.valid === false) valid = false;
		});

		this.valid = valid;
	},
	onUpdate: function () {
		this.validateForm();
		this.autosaveIfEnabled();
	}
};

obj.mounted = function () {
	this.validateForm();
};

obj.updated = function () {
	this.validateForm();
}

obj.values = function (data) {
	var result = {};

	data.fields.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;
}

obj.create = function (options) {

	options.headline = options.headline || "";
	options.valid = options.valid || false;
	options.error = options.error || "";

	options.fields.forEach ((field, index) => {
		field.error = field.error || [];
		field.label = field.label || "Form field";
		field.placeholder = field.placeholder || (field.label || "");
		field.valid = field.valid || false;
		field.type = field.type || 'text';
		field.validate = field.validate || [];
		field.required = field.required || false;
		field.validateOnlyIfNotEmpty = field.validateOnlyIfNotEmpty || false;
		field.valueLastValidated = undefined;

		field.name = field.name || "FORM_" + (new Date().getTime()) + "_FIELD_" + index + "_" + field.type;

		if (['hidden', 'checkbox'].indexOf(field.type) > -1) {
			field.valid = true;
		}

		if (['text'].indexOf(field.type) > -1) {
			field.value = field.value || '';

			if (field.required === true && field.validate.length === 0) field.validate = [nonEmpty];
		}

		if (['textarea'].indexOf(field.type) > -1) {
			field.value = field.value || '';

			if (field.required === true && field.validate.length === 0) field.validate = [nonEmpty];
		}

		if (['checkbox'].indexOf(field.type) > -1) {
			field.value = field.value ||  0;
		}

		if (['radio'].indexOf(field.type) > -1) {

			field.options.forEach(function (option, index) {
				if (typeof option.value === "undefined") option.value = index;
			});

			if (field.required === true) {
				field.value = field.value ||  field.options[0].value;

				if (field.validate.length === 0) field.validate = [radio];
			} else {
				field.value = field.value ||  null;
			}

		}

		if (['select'].indexOf(field.type) > -1) {

			var firstNotDisabled = undefined, iterator = 0;

			field.options.forEach(function (option, index) {
				if (typeof option.disabled === "undefined") option.disabled = false;

				if (option.disabled === false && !firstNotDisabled) firstNotDisabled = option;

				options.selected = false;

				if (option.disabled === true) {
					if (typeof option.value === "undefined") {
						option.value = null;
						options.selected = true;
					}
				} else {
					if (typeof option.value === "undefined") option.value = iterator;
					iterator++;
				}
			});

			if (field.required === true) {
				field.value = field.value || firstNotDisabled.value;
			} else {
				field.value = field.value || (field.options[0].disabled === true ? null : field.options[0].value);
			}

			if (field.required === true && field.validate.length === 0) field.validate = [select];
		}

	});

	options.buttons.forEach(function (button) {
		button.type = button.type || 'basic';
	});

	return options;

}

export default obj;
