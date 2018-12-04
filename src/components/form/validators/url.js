/* eslint-disable */

function validation (q) {
  var pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm; // fragment locater
  var res = pattern.test(q.value);

  return {
    result: res,
    message: res ? '' : 'není url'
  }
}

export default validation;
