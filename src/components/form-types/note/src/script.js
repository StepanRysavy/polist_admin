import Form from '@/components/form/do';
import Expandable from '@/components/expandable/do';
import {nonEmpty, url} from '@/components/form/validators/validators';

var o = {
	name: 'form-note',
	props: ['data', 'updated'],
}

o.data = function () {
	return {
		reactive: 0
	}
}

o.components = {
 'show-form': Form,
 'show-expandable': Expandable
};

o.mounted = function () {
	if (!this.data.json.notes) this.data.json.notes = [];
};

o.computed = {};

o.computed.list = function () {
	this.reactive = this.updated;
	return this.data.json.notes;
};

o.computed.form = function () {
	return Form.create({
		fields: [
			{
				name: 'valid',
				label: 'Platný',
				type: 'checkbox',
				required: true,
				value: true
			},
			{
				name: 'title',
				label: 'Popis',
				required: true,
				value: ''
			},
			{
				name: 'note',
				label: 'Text',
				type: 'textarea',
				required: true,
				value: ''
			}
		],
		buttons: [
			{
				type: 'confirm',
				label: 'Aktualizovat',
				onClick: this.submit
			}
		]
	})
};

o.methods = {};

o.methods.submit = function () {
	var values = Form.values(this.form);

	this.data.json.notes.push(Form.values(this.form));

	this.$emit("updated");
};

o.methods.up = function (index) {
	this.data.json.notes.move(index, index - 1);
	this.$emit("updated");
};

o.methods.down = function (index) {
	this.data.json.notes.move(index, index + 1);
	this.$emit("updated");
};

o.methods.remove = function (index) {
	this.data.json.notes.splice(index, 1);
	this.$emit("updated");
};


export default o;
