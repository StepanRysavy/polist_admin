const mutations = {};

mutations.login = function (state, payload) {
  state.user = 1;
  state.session = payload.sid;
}

mutations.set_node_types = function (state, payload) {
  state.node_types = payload;
}

mutations.set_link_types = function (state, payload) {
  state.link_types = payload;
}

export default mutations;
