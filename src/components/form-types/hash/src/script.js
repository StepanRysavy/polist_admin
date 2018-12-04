import Form from '@/components/form/do';

var o = {
	name: 'form-hash',
	props: ['data'],
}

o.components = {
 'show-form': Form
};

o.computed = {};
o.computed.form = function () {
	return Form.create({
		fields: [
			{
				name: 'hash',
				label: 'unikátní hash',
				required: true,
				value: this.data.hash || ''
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

	this.data.hash = values.hash;
	this.$emit("updated");
};


export default o;
