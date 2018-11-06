const chunk = (argArr, argNum) => {
  const result = [];
  argArr.reduce((acc, elem, i) => {
    if (i % argNum === 0) {
      const x = [];
      x.push(elem);
      result.push(x);
      return x;
    }
    if (elem) {
      acc.push(elem);
    }
  }, []);
  return result;
};

export default chunk;
