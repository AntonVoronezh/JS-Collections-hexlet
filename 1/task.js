const uniq = arr => {
  const filterd = arr.reduce((acc, value) => !acc.includes(value) ? acc.concat(value) : acc, []); 
  return filterd;
  };
  
  export default uniq;
  