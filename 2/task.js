const wordsCount = (list, stopWords) => {
  const getLowerArr = list.map(value => value.toLowerCase());
  const filterdArr = getLowerArr.filter(n => !stopWords.includes(n));
  const map = new Map();
  const out = filterdArr.reduce(
    (mapL, val) => (mapL.has(val) ? mapL.set(val, mapL.get(val) + 1) : mapL.set(val, 1)),
    map,
  );
  return out;
};

export default wordsCount;
