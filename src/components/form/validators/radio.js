function validation (q) {
  return {
    result: q.required === false || q.value !== null,
    message: 'radio ' + ((q.required === false || q.value !== null) ? 'je' : 'není ') + 'vybrán'
  }
}

export default validation;
