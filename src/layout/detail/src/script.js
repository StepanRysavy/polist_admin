import Form from '@/components/form/do';
import B from "@/language/babylon";
import {nonEmpty, email} from '@/components/form/validators/validators';

import FormHash from '@/components/form-types/hash/do';
import FormMeta from '@/components/form-types/meta/do';
import FormSocial from '@/components/form-types/social/do';
import FormLinks from '@/components/form-types/links/do';
import FormLinks3rd from '@/components/form-types/links-3rd-party/do';
import FormNotes from '@/components/form-types/note/do';

import Links from '@/components/links/do';
import LinksAdd from '@/components/links-add/do';
import LinksTypes from '@/components/links-types/do';

var o = {
	name: 'layout-detail',
	props: ['type', 'id'],
}

o.components = {
 'show-form': Form,
 'form-hash': FormHash,
 'form-meta': FormMeta,
 'form-social': FormSocial,
 'form-links': FormLinks,
 'form-links-3rd-party': FormLinks3rd,
 'form-notes': FormNotes,
 'show-links': Links,
 'show-links-add': LinksAdd,
 'show-links-types': LinksTypes
};

o.data = function () {
	return {
		data: undefined,
		updated: 0,
		newLinkCreated: null,
		stickyHeight: 0
	}
};

o.computed = {};

o.methods = {};

o.methods.setStickyHeight = function () {
	setTimeout(() => {
		var el = this.$el.querySelector(".sticky");
		var styles = window.getComputedStyle(el);
		var margin = 0; // parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
		var padding = 0; // parseFloat(styles['paddingTop']) + parseFloat(styles['paddingBottom']);
		this.stickyHeight = Math.ceil(el.offsetHeight + padding);
	}, 100);
}

o.methods.setUpdated = function () {
	this.updated++;
}

o.methods.fetchedData = function (data) {
	this.data = data;
	this.updated = 0;
	this.setStickyHeight();
};

o.methods.save = function () {
	this.$store.dispatch("save", {
		type: this.type,
		id: this.id,
		query: this.data,
		onComplete: (data) => this.fetchedData(data)
	});
};

o.methods.fetch = function () {
	this.$store.dispatch("detail", {
		type: this.type,
		id: this.id,
		onComplete: (data) => this.fetchedData(data)
	});
}

o.methods.link_created = function () {
	this.newLinkCreated = new Date().getTime();
}

o.mounted = function () {
	this.fetch();
	window.addEventListener("resize", () => this.setStickyHeight());
}

o.watch = {
	type: function () {
		this.fetch();
	},
	id: function () {
		this.fetch();
	}
}

export default o;
