const obj = {};

obj.name = 'button-confirm';
obj.props = ['data', 'disabled'];
obj.components = {};

obj.data = function () {
	return {}
};

obj.computed = {}
obj.methods = {
	handleConfirm: function (e) {
		this.$emit("click");
	}
};
obj.mounted = function () {};

export default obj;

