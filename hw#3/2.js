"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function getNumber(msg){
    const userNumber = +prompt(msg);
    if (isNaN(userNumber)) {
        console.log('Значение задано неверно');
    } else {
        return userNumber;
    }
}

const getPureSalary = salary => salary * 0.87;

const userSalary = getNumber('Введите число: ');
console.log(`Размер заработной платы за вычетом налогов равен ${getPureSalary(userSalary)}`);