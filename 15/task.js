const buildQueryString = (arg) => {
  const result = [];
  Object.keys(arg).sort().forEach(item => result.push(item + '=' + arg[item]));
  return result.join('&');
};

export default buildQueryString;
