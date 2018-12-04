function validation (q) {
  return {
    result: q.required === false || q.value !== null,
    message: 'select ' + ((q.required === false || q.value !== null) ? 'je ' : 'není ') + 'vybrán'
  }
}

export default validation;
