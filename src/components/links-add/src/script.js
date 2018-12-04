import Form from '@/components/form/do';

const obj = {};

obj.name = 'links-add';
obj.props = ['of'];
obj.components = {
	'show-form': Form
};

obj.data = function () {
	return {
		selectedList: -1,
		loadedList: null
	}
};

obj.computed = {
	formSelectList: function () {

		var options = [{
			value: 0,
			label: 'Vyberte typ seznamu',
			disabled: true
		}];

		this.$store.state.node_types.forEach((type) => {
			options.push({
				value: type.id,
				label: type.name
			});
		});

		return Form.create({
			fields: [
				{
					name: 'list',
					label: 'Typ prvku',
					required: true,
					type: 'select',
					options: options
				}
			],
			buttons: [
				{
					type: 'confirm',
					label: 'Načíst',
					onClick: this.submit_formSelectList
				}
			]
		})
	},
	formCreateLink: function () {

		var options = [{
			value: 0,
			label: 'Vyberte prvek',
			disabled: true
		}];

		var optionsTypes = [{
			value: 0,
			label: 'Vyberte typ vazby',
			disabled: true
		}];

		this.loadedList.forEach((type) => {
			options.push({
				value: type.id,
				label: type.meta_title
			});
		});

		this.$store.state.link_types.forEach((type) => {
			optionsTypes.push({
				value: type.id,
				label: type.name
			})
		})

		return Form.create({
			fields: [
				{
					name: 'id_node_A',
					label: 'Aktuální node',
					type: 'hidden',
					value: this.of
				},
				{
					name: 'id_node_B',
					label: 'Vazba',
					required: true,
					type: 'select',
					options: options
				},
				{
					name: 'id_link_type',
					label: 'Typ vazby',
					required: true,
					type: 'select',
					options: optionsTypes
				},
				{
					name: 'time_from',
					label: 'Začátek',
					required: true,
					htmlType: 'date'
				},
				{
					name: 'time_to',
					label: 'Konec',
					htmlType: 'date'
				},
				{
					name: 'note',
					label: 'Poznámka',
					type: 'textarea'
				}
			],
			buttons: [
				{
					type: 'confirm',
					label: 'Načíst',
					onClick: this.submit_formCreateLink
				}
			]
		})
	}
}

obj.methods = {
	submit_formSelectList: function () {
		this.selectedList = Form.values(this.formSelectList).list;
		this.loadList(this.selectedList);
	},
	loadList: function (type) {
		this.$store.dispatch("list", {
			type: type,
			onComplete: this.loadListComplete
		});
	},
	loadListComplete: function (data) {
		this.loadedList = data;
	},
	submit_formCreateLink: function () {
		var values = Form.values(this.formCreateLink);

		var query = {
			id_node_A: Number(values.id_node_A),
			id_node_B: Number(values.id_node_B),
			id_link_type: Number(values.id_link_type),
			time_from: new Date(values.time_from).getTime(),
			time_to: new Date(values.time_to).getTime(),
			json: {note: values.note}
		};

		if (values.time_to === "") query.time_to = 9999999999999;

		this.$store.dispatch("link_add", {
			query: query,
			id: -1,
			onComplete: this.linkCreated
		});
	},
	linkCreated: function () {
		this.$emit("created", {});
	}
};

obj.mounted = function () {

};

export default obj;
