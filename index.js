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

function guessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;
    
    alert("Добро пожаловать в игру 'Угадай число'!\nЯ загадал число от 1 до 100. Попробуй угадать!");
    
    do {
        guess = prompt("Введите ваше предположение (от 1 до 100):");
        
        if (guess === null) {
            alert("Игра завершена. Было загадано число: " + secretNumber);
            return;
        }
        
        const guessNumber = Number(guess);
        
        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            alert("Пожалуйста, введите число от 1 до 100!");
            continue;
        }
        
        attempts++;
        
        if (guessNumber < secretNumber) {
            alert("Загаданное число БОЛЬШЕ!");
        } else if (guessNumber > secretNumber) {
            alert("Загаданное число МЕНЬШЕ!");
        } else {
            alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
            return;
        }
        
    } while (true);
}

// новая игра 
function mathGame() {
    alert("Добро пожаловать в игру 'Математика'!\nРешите несколько простых задач.");
    
    let correctAnswers = 0;
    
    for (let i = 0; i < 3; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        
        // + или -
        const operation = Math.random() > 0.5 ? '+' : '-';
        
        let problem = '';
        let correctAnswer = 0;
        
        if (operation === '+') {
            problem = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
        } else {
            problem = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
            correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
        }
        
        const userAnswer = prompt(`Задача ${i + 1}: ${problem} = ?`);
        
        if (userAnswer === null) {
            alert("Игра остановлена");
            return;
        }
        
        // роверяем ответ
        if (Number(userAnswer) === correctAnswer) {
            alert("Правильно!");
            correctAnswers++;
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
    
    // итоговый результат
    alert(`Игра окончена! Вы решили правильно ${correctAnswers} из 3 задач.`);
}

console.log("\nзадание 1 ");
const numbers1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
    if (numbers1[i] === 10) {
        break;
    }
}

console.log("\nзадание 2 ");
const numbers2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 4) {
        console.log("Индекс числа 4:", i);
        break;
    }
}

console.log("\nзадание 3 ");
const numbers3 = [1, 3, 5, 10, 20];
console.log("Элементы через пробел:", numbers3.join(' '));

console.log("\nзадание 4 ");
const bigArray = [];
for (let i = 0; i < 3; i++) {
    const smallArray = [];
    for (let j = 0; j < 3; j++) {
        smallArray.push(1);
    }
    bigArray.push(smallArray);
}
console.log("Многомерный массив:", bigArray);

console.log("\nзадание 5 ");
const numbers5 = [1, 1, 1];
numbers5.push(2, 2, 2);
console.log("Массив с добавленными двойками:", numbers5);

console.log("\nзаданеи 6 ");
const mixedArray = [9, 8, 7, 'a', 6, 5];
mixedArray.sort();
const noLetterArray = [];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] !== 'string' || isNaN(mixedArray[i])) {
        continue;
    }
    noLetterArray.push(mixedArray[i]);
}
console.log("Без буквы 'a':", noLetterArray);

console.log("\nзадание 7 ");
const numbers7 = [9, 8, 7, 6, 5];
function guessNumberFromArray() {
    const answer = prompt("Угадайте число из массива [9, 8, 7, 6, 5]:");
    if (answer === null) return;
    
    const userNumber = Number(answer);
    let found = false;
    
    for (let i = 0; i < numbers7.length; i++) {
        if (numbers7[i] === userNumber) {
            found = true;
            break;
        }
    }
    
    if (found) {
        alert("Угадал!");
    } else {
        alert("Не угадал!");
    }
}

console.log("\nзадание 8 ");
const text = 'abcdef';
const letters = text.split('');
letters.reverse();
const reversedText = letters.join('');
console.log("Перевернутая строка:", reversedText);

console.log("\nзадание 9 ");
const matrix = [[1, 2, 3], [4, 5, 6]];
const flatArray = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        flatArray.push(matrix[i][j]);
    }
}
console.log("Одномерный массив:", flatArray);

console.log("\nзадание 10 ");
const numbers10 = [1, 3, 5, 7, 9];
for (let i = 0; i < numbers10.length - 1; i++) {
    const sum = numbers10[i] + numbers10[i + 1];
    console.log(`${numbers10[i]} + ${numbers10[i + 1]} = ${sum}`);
}

console.log("\nзадание 11 ");
function getSquares(numbers) {
    const squares = [];
    for (let i = 0; i < numbers.length; i++) {
        squares.push(numbers[i] * numbers[i]);
    }
    return squares;
}
const sampleNumbers = [2, 3, 4];
console.log("Квадраты чисел:", getSquares(sampleNumbers));

console.log("\nзадание 12 ");
function getLengths(words) {
    const lengths = [];
    for (let i = 0; i < words.length; i++) {
        lengths.push(words[i].length);
    }
    return lengths;
}
const sampleWords = ["кот", "собака", "птица"];
console.log("Длины слов:", getLengths(sampleWords));

console.log("\nзадание 13 ");
function filterNegatives(numbers) {
    const negatives = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negatives.push(numbers[i]);
        }
    }
    return negatives;
}
const mixedNumbers = [1, -2, 3, -4, 5];
console.log("Отрицательные числа:", filterNegatives(mixedNumbers));

console.log("\nзадание 14 ");
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
}
const evenNumbers = [];
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumbers.push(randomNumbers[i]);
    }
}
console.log("Случайные числа:", randomNumbers);
console.log("Четные числа:", evenNumbers);

console.log("\nзадание 15 ");
const sixNumbers = [];
for (let i = 0; i < 6; i++) {
    sixNumbers.push(Math.floor(Math.random() * 10) + 1);
}
let total = 0;
for (let i = 0; i < sixNumbers.length; i++) {
    total += sixNumbers[i];
}
const average = total / sixNumbers.length;
console.log("6 случайных чисел:", sixNumbers);
console.log("Среднее арифметическое:", average.toFixed(2));

document.addEventListener('DOMContentLoaded', function() {
    console.log("Сайт загружен!");
    
    const gameButtons = document.querySelectorAll('.game-detail__button');
    
    if (gameButtons.length > 0) {
        gameButtons[0].addEventListener('click', function() {
            guessNumberGame();
        });
    }
    
    if (gameButtons.length > 1) {
        gameButtons[1].addEventListener('click', function() {
            mathGame();
        });
    } else if (gameButtons.length === 1) {
        gameButtons[0].addEventListener('click', function() {
            mathGame();
        });
    }
    
    const headerButton = document.querySelector('.header__button');
    if (headerButton) {
        headerButton.addEventListener('click', function(e) {
            e.preventDefault();
            guessNumberFromArray();
        });
    }
    
const testButton = document.createElement('button');
testButton.textContent = 'Тест заданий';
testButton.onclick = function() {
    alert("Все задания уже выполнены и показаны в консоли!");
};
    document.body.appendChild(testButton);
    
    console.log("\nПроверка функций");
    console.log("minNumber(5, 3):", minNumber(5, 3));
    console.log("checkEvenOdd(4):", checkEvenOdd(4));
    console.log("Площадь круга радиусом 5:", circle1.getArea().toFixed(2));
});