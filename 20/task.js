const nrzi = (argStr) => {
  const result = argStr.split('');
  let out = '';
  result.forEach((elem, i) => {
    if (elem !== '|') {
      if (result[i - 1] === '|') {
        out += '1';
      } else {
        out += '0';
      }
      //
    }
  });
  return out;
};

export default nrzi;
