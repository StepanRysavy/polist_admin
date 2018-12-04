import Form from '@/components/form/do';
import Expandable from '@/components/expandable/do';

const obj = {};

obj.name = 'links-types';
obj.components = {
	'show-form': Form,
  'show-expandable': Expandable
};

obj.data = function () {
	return {}
};

obj.computed = {
	formLinkTypeAdd: function () {
		return Form.create({
			fields: [
				{
					name: 'name',
					label: 'Název vazby',
					required: true,
					value: ''
				}
			],
			buttons: [
				{
					type: 'confirm',
					label: 'Vytvořit',
					onClick: this.submit
				}
			]
		})
	}
}

obj.methods = {
	submit: function () {
		this.$store.dispatch("link_type_add", {
			query: {
				name: Form.values(this.formLinkTypeAdd).name
			}
		});
	}
};

export default obj;
