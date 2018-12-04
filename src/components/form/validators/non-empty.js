// import B from '@/language/babylon';

function validation (q) {

  return {
    result: q.value.length > 0,
    message: q.value.length === 0 ? 'prázdné pole' : ''
  }
}

export default validation;
