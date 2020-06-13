const getParams = (name) => {
  const params  = new URLSearchParams(window.location.search);
  return params.get(name);
}

export {
  getParams,
}