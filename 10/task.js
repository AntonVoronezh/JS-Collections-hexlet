const createObjFromArr = (arg) => {
  const result = {};
    arg.forEach(item => result[item[0]] = item[1]);
  return result;
  };
  
  export default createObjFromArr;
  