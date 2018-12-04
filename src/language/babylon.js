import dictionary from './dictionary';
import store from '@/store/store';

const fallback = 'cs';

const Babylon = function (code) {
  var response;
  var particle = code.split('.');

  try {
    response = dictionary[particle[0]][particle[1]];

    try {
      response = response[store.state.language];
    } catch (e) {
      response = response[fallback];
    }
  } catch (e) {
    response = '..';
  }

  return response;
};

export default Babylon;
