import Form from '@/components/form/do';
import {beautifyDate} from '@/store/helpers';

const obj = {};

obj.name = 'links';
obj.props = ['of', 'newLink'];
obj.components = {
	'show-form': Form
};

obj.data = function () {
	return {
		links: undefined
	}
};

obj.computed = {}

obj.methods = {
	beautifyDate: beautifyDate,
	fetchedLinks: function (links) {
		this.links = links;
	},
	fetchedLinkTypes: function (types) {
		this.links.types = types;
	},
	fetch: function () {
		this.$store.dispatch("link_list", {
			id: this.of,
			onComplete: (data) => this.fetchedLinks(data)
		});
	},
	remove: function (link) {
		this.$store.dispatch("link_remove", {
			id: link.id,
			onComplete: (data) => this.fetch()
		});
	}
};

obj.mounted = function () {
	this.fetch();
};

obj.watch = {
	newLink: function () {
		if (this.newLink) this.fetch();
	},
	of: function () {
		this.fetch();
	}
}

export default obj;
