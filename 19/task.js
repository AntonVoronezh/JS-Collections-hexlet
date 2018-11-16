const enlargeArrayImage = (argArr) => {
  const result = [];
  argArr.map((elem) => {
    result.push(elem.join('%').split('%').reduce((acc, value) => [...acc, value, value], []));
    result.push(elem.join('%').split('%').reduce((acc, value) => [...acc, value, value], []));
  });
  return result;
};

export default enlargeArrayImage;
