"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 * Функция возводит число в куб
 * @param {number} number 
 * @returns возвращает куб числа
 */
function cubeNumber(number) {
    return number ** 3;
}
console.log(cubeNumber(3));

// второй варинат
const cubeNumber2 = number => number ** 3;
console.log(cubeNumber2(4));