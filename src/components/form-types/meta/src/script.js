import Form from '@/components/form/do';
import {nonEmpty, url, canLoad} from '@/components/form/validators/validators';

var o = {
	name: 'form-meta',
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
				name: 'title',
				label: 'Nadpis',
				required: true,
				value: this.data.meta_title || ''
			},
			{
				name: 'desc',
				label: 'Popis',
				required: true,
				value: this.data.meta_description || ''
			},
			{
				name: 'img',
				label: 'URL obrázku',
				type: 'img',
				value: this.data.meta_img || '',
				validate: [url, canLoad],
				validateOnlyIfNotEmpty: true
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

	this.data.meta_title = values.title;
	this.data.meta_description = values.desc;
	this.data.meta_img = values.img;

	this.$emit("updated");
};


export default o;
