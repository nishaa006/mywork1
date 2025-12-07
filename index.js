// Задание 1
let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// Задание 2
let c = 0;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 0;
if (c > 0 && c < 10) console.log('Верно'); else console.log('Неверно');

c = 10;
if (c > 0 && c < 10) console.log('Верно'); else console.log('Неверно');

c = -3;
if (c > 0 && c < 10) console.log('Верно'); else console.log('Неверно');

c = 2;
if (c > 0 && c < 10) console.log('Верно'); else console.log('Неверно');

// Задание 3
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;

switch(monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('номер месяца должен быть от 1 до 12');
}