/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
  return typeof variable;
}

/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName(variable) {
    switch (typeof variable) {
    case 'boolean':
        return 'primitive';
    case 'symbol':
         return 'primitive';
    case 'string':
         return 'primitive';
    case 'number':
        return 'primitive';
    case 'undefined':
        return 'primitive-special';
    case 'object':
        if (variable === null) return 'primitive-special';
        if (Array.isArray(variable)) return 'object-array';
        return 'object';
    case 'function':
        return 'object-function';
    }
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
function compareByType(a, b) {
    if( a === b )
        return 1;
    if( a == b )
        return 0;
    return -1;
}

// Numbers

/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
function increase(value) {
    if (typeof value === 'number')
        if(!isNaN(value)) 
            return ++value;
    return -1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber(value) {
    if(!isFinite(value) || isNaN(value))
        return 'danger';
    return 'safe';
}

// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
    return str.split(' ');
}

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
    return str.split(',')[0];
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
    if(str.split(symbol).length === 2)
        return str.indexOf(symbol);
    return false;
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную "-" если не задан
*/
function join(array, separator) {
    if(separator)
        return array.join(separator);
    return array.join('-');
}

/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
    return [...arrA, ...arrB];
}


/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
    let result = arr.slice();
    if(typeof result[0] === 'string') 
        return result.sort().reverse();
    return result.sort((a, b) => b - a);
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
    return arr.filter((val) => val >= 0);
}

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
function without(arrA, arrB) {
    let result = [];
    for (let item of arrA) {
        if (!arrB.includes(item)) 
            result.push(item);
    }
    return result;
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
function calcExpression(expression) {
    let action = expression.trim().substr(1).match(/\+|\-|\/|\*/)[0];
    let numbers = expression.split(action); 
    let first = +numbers[0].trim();
    let second = +numbers[1].trim();

    switch (action) {
      case '+':
          return first + second;
      case '-':
          return first - second;
      case '*':
          return first * second;
      case '/':
          return first / second;
  }
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
function calcComparison(expression) {
    let action = expression.match(/>=|<=|>|<|=/)[0];
    if(action === '=')
        return eval(expression.replace('=', '=='));
    else
        return eval(expression);
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
function evalKey(obj, expression) {
    let result = 'obj';
    let access = expression.split('.').slice(1);
    if (!access[0]) 
        return eval(result + expression);
    for (let item of access){
        result += `['${item}']`;
    }
    if (!eval(result)) 
        throw new Error();
    return eval(result);
}

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey
};