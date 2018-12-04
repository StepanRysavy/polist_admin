// import {url} from '@/components/form/validators/validators';

/* eslint-disable */

function validation (q) {
  return new Promise((resolve, reject) => {

    var img = new Image();

    img.addEventListener("error", () => {

      resolve({
        result: false,
        message: 'nelze načíst'
      })

    });

    img.addEventListener("load", () => {

      resolve({
        result: true,
        message: ''
      });

    });

    img.src = q.value;

  });
}

export default validation;
