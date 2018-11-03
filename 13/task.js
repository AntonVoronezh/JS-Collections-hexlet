const getCarsCountByYear = (arg) => {
  const iter = (argIter, counter, acc) => {
    if (counter === arg.length) {
      return acc;
    }
    const [first, ...rest] = argIter;
    const { year } = first;
    const value = typeof (acc[year]) === 'undefined' ? 1 : acc[year] + 1;
    return iter(rest, counter + 1, { ...acc, [year]: value });
  };
  return iter(arg, 0, {});
};

export default getCarsCountByYear;
