import {demo} from './helpers';

const getters = {
  vuexState: state => state
}

getters.demo = (state, getters) => () => {
  demo();
};

export default getters;
