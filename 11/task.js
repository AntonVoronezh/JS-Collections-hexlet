const without = (argArr, ...args) => {
  const result = [];
  argArr.forEach(item => (args.indexOf(item) === -1 ? result.push(item) : null));
  return result;
};

export default without;
