export default {
	name: 'layout-list',
	props: ['id'],
	data: function () {
		return {
			list: undefined
		}
	},
  components: {
  },
	computed: {
	},
  methods: {
		fetchedData: function (data) {
			this.list = data;
		},
		added: function (data) {
			this.$router.push('/detail/' + this.id + "/" + data.id);
		},
		add: function () {
			this.$store.dispatch("save", {
				id: -2,
				query: {
					meta_title: '- nový záznam',
					id_node_type: this.id
				},
				onComplete: (data) => this.added(data)
			});
		}
  },
  mounted: function () {
		this.$store.dispatch("list", {
			type: this.id,
			onComplete: (data) => this.fetchedData(data)
		});
  }
};
