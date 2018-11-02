const uniq = (arg) => arg.filter((item, i, arr) => i === arr.indexOf(item));

const intersection = (arg1, arg2) => {
  const result = arg1.filter(item => arg2.indexOf(item) !== -1);
  return uniq(result);
};

export default intersection;

