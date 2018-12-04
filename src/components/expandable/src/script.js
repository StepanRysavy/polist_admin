var obj = {
	name: "expandable",
	props: ['expanded'],
	data: function () {
		return {
			exp: this.expanded || false
		}
	},
	methods: {
		toggle: function () {
			this.exp = !this.exp;
		}
	}
}

export default obj;
