const findIndexOfNearest = (arg1, arg2) => {
  if (arg1.length === 0) {
    return null;
  }
  const result = [{ diff: arg2, num: null }];
  arg1.map((item, i) => result.push({ diff: item, num: i }));
  const out = result.sort(((a, b) => a.diff > b.diff));
  let n;
  out.filter((item, i) => (item.num === null ? n = i : null));
  if (out[n - 1]) {
    const leftDiff = out[n].diff - out[n - 1].diff;
    const rightDiff = out[n + 1].diff - out[n].diff;
    if (leftDiff < rightDiff) {
      return result[n - 1].num;
    }
    if (leftDiff === rightDiff) {
      return result[n + 1].num > result[n - 1].num ? result[n - 1].num : result[n + 1].num;
    }
    return result[n + 1].num;
  } if (!out[n - 1]) {
    return result[n + 1].num;
  }
};

export default findIndexOfNearest;
