const difference = (arg1, arg2) => {
  const arg2Set = new Set(arg2);
  return arg1.filter(item => !arg2Set.has(item));
};

export default difference;
