import Form from '@/components/form/do';
import Expandable from '@/components/expandable/do';
import {nonEmpty, url} from '@/components/form/validators/validators';

var o = {
	name: 'form-links3rd',
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
	if (!this.data.json.links3rd) this.data.json.links3rd = [];
};

o.computed = {};

o.computed.list = function () {
	this.reactive = this.updated;
	return this.data.json.links3rd;
};

o.computed.form = function () {
	return Form.create({
		fields: [
			{
				name: 'site',
				label: 'Projekt',
				required: true,
				type: 'select',
				options: [
					{value: 'demagog', label: 'Demagog'},
					{value: 'hlidac_statu', label: 'Hlídač státu'},
					{value: 'wiki', label: 'Wikipedia'},
					{value: 'ep', label: 'Stránky Evropského parlamentu'}
				]
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

	this.data.json.links3rd.push(Form.values(this.form));

	this.$emit("updated");
};

o.methods.up = function (index) {
	this.data.json.links3rd.move(index, index - 1);
	this.$emit("updated");
};

o.methods.down = function (index) {
	this.data.json.links3rd.move(index, index + 1);
	this.$emit("updated");
};

o.methods.remove = function (index) {
	this.data.json.links3rd.splice(index, 1);
	this.$emit("updated");
};


export default o;
