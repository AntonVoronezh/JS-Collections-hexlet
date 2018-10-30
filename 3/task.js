const difference = (set1, set2) => {
  const setOut = new Set();
  const getDifference = set1.forEach(value => !set2.has(value) ? setOut.add(value) : console.log(value));
  return setOut;
  };

  export default difference;
  