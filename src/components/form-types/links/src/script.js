import Form from '@/components/form/do';
import Expandable from '@/components/expandable/do';
import {nonEmpty, url} from '@/components/form/validators/validators';

var o = {
	name: 'form-links',
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
	if (!this.data.json.links) this.data.json.links = [];
};

o.computed = {};

o.computed.list = function () {
	this.reactive = this.updated;
	return this.data.json.links;
};

o.computed.form = function () {
	return Form.create({
		fields: [
			{
				name: 'label',
				label: 'Popis',
				required: true,
				value: ''
			},
			{
				name: 'url',
				label: 'URL',
				htmlType: 'url',
				required: true,
				value: '',
				validate: [nonEmpty, url]
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

	this.data.json.links.push(Form.values(this.form));

	this.$emit("updated");
};

o.methods.up = function (index) {
	this.data.json.links.move(index, index - 1);
	this.$emit("updated");
};

o.methods.down = function (index) {
	this.data.json.links.move(index, index + 1);
	this.$emit("updated");
};

o.methods.remove = function (index) {
	this.data.json.links.splice(index, 1);
	this.$emit("updated");
};


export default o;
