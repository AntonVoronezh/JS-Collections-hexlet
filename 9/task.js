const objectify = (coll, func) => {
  return coll.reduce((acc, value) => ({ ...acc, [func(value)]: value }) , []); 
};

export default objectify;
