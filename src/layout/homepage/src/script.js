import Form from '@/components/form/do';
import Expandable from '@/components/expandable/do';

export default {
	name: 'layout-homepage',
	data: function () {
		return {
				list: null
		}
	},
  components: {
		'show-form': Form,
	  'show-expandable': Expandable
  },
	computed: {
		formNodeTypeAdd: function () {
			return Form.create({
				fields: [
					{
						name: 'hash',
						label: 'Hash',
						required: true,
						value: ''
					},
					{
						name: 'name',
						label: 'Název typu',
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
	},
  methods: {
		submit: function () {
			this.$store.dispatch("node_types_add", {
				query: Form.values(this.formNodeTypeAdd)
			});
		}
  },
  mounted: function () {
		this.$store.dispatch("node_types_get", {});
  }
};
