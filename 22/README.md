# Нормализация данных

 ## Задание
```

Реализуйте и экспортируйте по умолчанию функцию, которая переводит входные 
данные в удобный для построения графика формат.

На вход эта функция принимает массив данных. Каждая запись массива представляет из 
себя объект типа { value: 14, date: '02.08.2018' }. Например:

const data = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
  { value: 38, date: '05.08.2018' },
];

Вторым и третьим параметрами функция принимает даты (в форме строк типа 'YYYY-MM-DD') 
начала и конца периода:

const start = '2018-08-01';
const end = '2018-08-06';

Диапазон дат задаёт размер выходного массива, который должна сгенерить реализуемая функция. 
Правила формирования итогового массива:

•	он заполняется записями по всем дням из диапазона start - end
•	в него включаются только те записи из входного массива, даты которых попадают в диапазон
•	если во входном массиве нет данных для какого-то дня из диапазона, то в свойство value 
записи этого дня установить значение 0



```

