console.log("Привет, мир!");

for (let i = 1; i <= 5; i++) {
    console.log("Число:", i);
}

for (let i = 7; i <= 22; i++) {
    console.log("Счет:", i);
}

const salaries = {
    "Коля": '200',
    "Вася": '300', 
    "Петя": '400'
};

for (const name in salaries) {
    console.log(name + " — зарплата " + salaries[name] + " долларов");
}

let number = 1000;
let count = 0;

while (number >= 50) {
    number = number / 2;
    count = count + 1;
}

console.log("Итоговое число:", number);
console.log("Сколько раз делили:", count);

const firstFridayDay = 5;
const totalDays = 31;

for (let day = firstFridayDay; day <= totalDays; day = day + 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}

function getMinNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function checkIfEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

function showSquare(number) {
    const square = number * number;
    console.log("Квадрат числа " + number + " равен " + square);
}

function calculateSquare(number) {
    return number * number;
 }

function checkUserAge() {
    const answer = prompt("Сколько вам лет?");
    
    if (answer === null) {
        return "Вы отменили ввод";
    }
    
    const age = Number(answer);
    
    if (isNaN(age) || age < 0) {
        return "Вы ввели неправильное значение";
    } else if (age >= 0 && age <= 12) {
        return "Привет, друг!";
    } else {
        return "Добро пожаловать!";
    }
}

function multiplyTwoNumbers(a, b) {
    const firstNumber = Number(a);
    const secondNumber = Number(b);
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Одно или оба значения не являются числом";
    } else {
        return firstNumber * secondNumber;
    }
}

function calculateCubeNumber() {
    const input = prompt("Введите число для возведения в куб:");
    
    if (input === null) {
        return "Вы отменили ввод";
    }
    
    const number = Number(input);
    
    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    } else {
        const cube = number * number * number;
        return number + " в кубе равняется " + cube;
    }
}

const circleOne = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circleTwo = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("\n=== Тест функций ===");
console.log("Меньшее из 5 и 10:", getMinNumber(5, 10));
console.log("Проверка числа 7:", checkIfEvenOrOdd(7));
showSquare(4);
console.log("Квадрат 6:", calculateSquare(6));
console.log("Площадь круга радиусом 5:", circleOne.getArea().toFixed(2));
console.log("Периметр круга радиусом 10:", circleTwo.getPerimeter().toFixed(2));
