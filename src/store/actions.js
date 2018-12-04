import axios from 'axios';

const actions = {};

function q (payload) {

  var params;

  if (typeof URLSearchParams !== 'undefined') {
    params = new URLSearchParams();

    Object.keys(payload).forEach(key => {
      if (key !== 'onComplete') {
        if (key !== 'json') {
          params.append(key, payload[key]);
        } else {
          params.append(key, JSON.stringify(payload[key]));
        }
      }
    });
  } else {
    params = payload;
  }

  // console.log(params);

  return params;
}

actions.login = function (context, payload) {

  axios.post('admin/login', q(payload.data)).then((response) => {
    if (response.data.code === 200) {
      context.commit('login', response.data);
      if (payload.onComplete) payload.onComplete();
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })

}

actions.ga = function (context, payload) {
  document.title = payload.title;

  if (window.gtag) {
    window.gtag('config', 'UA-4347750-17', {'page_path': payload.path, 'page_title': payload.title});
  } else {
    console.log('GA:', '/' + payload.path, ' : ', payload.title);
  }
};

actions.node_types_get = function (context, payload) {
  axios.post('node/type_list', q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      context.commit('set_node_types', response.data.result);
      if (payload.onComplete) payload.onComplete(response.data.result);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.node_types_add = function (context, payload) {
  axios.post('node/type_add', q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      context.commit('set_node_types', response.data.result);
      if (payload.onComplete) {
        payload.onComplete(response.data.result);
      }
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.list = function (context, payload) {
  axios.post('node/list/' + payload.type, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (payload.onComplete) payload.onComplete(response.data.result);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.detail = function (context, payload) {
  axios.post('node/get/' + payload.id, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (response.data.result.json) response.data.result.json = JSON.parse(response.data.result.json);
      if (payload.onComplete) payload.onComplete(response.data.result);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.save = function (context, payload) {
  axios.post('node/save/' + payload.id, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (response.data.result.json) response.data.result.json = JSON.parse(response.data.result.json);
      if (payload.onComplete) payload.onComplete(response.data.result);
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.link_list = function (context, payload) {
  axios.post('link/get/' + payload.id, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (response.data.result.json) response.data.result.json = JSON.parse(response.data.result.json);
      context.commit('set_link_types', response.data.types);
      if (payload.onComplete) {
        payload.onComplete({
          results: response.data.result,
          meta: response.data.meta,
          types: response.data.types
        });
      }
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.link_add = function (context, payload) {
  axios.post('link/save/' + payload.id, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (payload.onComplete) payload.onComplete();
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.link_remove = function (context, payload) {
  axios.post('link/remove/' + payload.id, q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      if (payload.onComplete) payload.onComplete();
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.link_type_get = function (context, payload) {
  axios.post('link/type_list', q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      context.commit('set_link_types', response.data.types);
      if (payload.onComplete) {
        payload.onComplete(response.data.types);
      }
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

actions.link_type_add = function (context, payload) {
  axios.post('link/type_add', q(payload.query || {})).then((response) => {
    if (response.data.code === 200) {
      context.commit('set_link_types', response.data.types);
      if (payload.onComplete) {
        payload.onComplete(response.data.types);
      }
    } else {
      console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  })
}

export default actions;
