const start = argStart.split('-');
const end = argEnd.split('-');

const getNewForm = (arg) => {
  const arrFromArg = arg.split('-');
  const out = `.${arrFromArg[1]}.${arrFromArg[0]}`;
  return out;
};

const out = [];

for (let i = +start[2]; i < +end[2] + 1; i += 1) {
  const num = i < 10 ? `0${i}` : i;
  out.push({ value: 0, date: num + getNewForm(argEnd) });
}

argArr.forEach(item => out.map(elem => 
  (elem.date === item.date ? elem.value = item.value : null)));
return out;
};

export default normalizeData;
