import axios from "axios";
import store from "@/store/store";

axios.defaults.baseURL = 'https://api.polist.cz/';
axios.interceptors.request.use(function (config) {

    // if (config.url.indexOf("login.php") > -1) return config;
    // var link = config.url.split(axios.defaults.baseURL);
    // if (!config.params) config.params = {};

    config.params = {};
    // config.params.url = "";
    config.params.noCache = new Date().getTime();
    if (store.state.session != '') config.params.sid = store.state.session;
    // config.url = axios.defaults.baseURL;

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default {
	name: 'app',
    data: function () {
      return {}
    },
    components: {
    },
    computed: {
    },
    methods: {
    },
    mounted: function () {
      this.$store.dispatch("node_types_get", {});
      this.$store.dispatch("link_type_get", {});
    },
};
