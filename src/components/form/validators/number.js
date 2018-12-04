function validation (q) {
  return {
    result: !isNaN(q.value),
    message: 'value is ' + (isNaN(q.value) ? 'není ' : '') + 'číslo'
  }
}

export default validation;
