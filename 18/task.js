const findOdd = (argArr) => {
  const result = new Map();
  let num;
  argArr.forEach((item) => {
    if (result.has(item)) {
      return result.get(item) === true ? result.set(item, false) : result.set(item, true);
    }
    return result.set(item, true);
  });

  result.forEach((value, key) => {
    if (value === true) { num = key; }
  });
  return num;
};

export default findOdd;
