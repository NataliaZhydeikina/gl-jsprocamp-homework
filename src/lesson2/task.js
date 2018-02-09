/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
    if (arguments.length == 2 && typeof a == 'number' && typeof b == 'number')
        return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll() {
    if (!args.length)
        throw new Error('No arguments');
    if (args.some(x => typeof x == 'number')) 
        return args.reduce((a, b) => a + b, 0);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
    if (arguments.length == 2 && typeof x == 'number' && typeof n == 'number')
        return x ** n;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
    if (arguments.length == 2 && typeof from == 'number' && typeof to == 'number' && from < to)
        return Math.floor(Math.random() * ((to - from) + 1)) + from;
}

export default {
  sum,
  sumAll,
  pow,
  random,
};
