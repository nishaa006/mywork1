console.log("Привет");
console.log("Привет");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (const key in obj) {
    console.log(key + " — зарплата " + obj[key] + " долларов");
}

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(n);
console.log(num);

const firstFriday = 5;
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}


function minNumber(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}


function printSquare(num) {
    console.log(`Квадрат числа ${num} равен ${num * num}`);
}

function getSquare(num) {
    return num * num;
}


function checkAge() {
    const age = prompt("Сколько вам лет?");
    const ageNumber = Number(age);
    
    if (isNaN(ageNumber) || ageNumber < 0) {
        return "Вы ввели неправильное значение";
    } else if (ageNumber >= 0 && ageNumber <= 12) {
        return "Привет, друг!";
    } else {
        return "Добро пожаловать!";
    }
}

function multiplyNumbers(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    
    if (isNaN(numA) || isNaN(numB)) {
        return "Одно или оба значения не являются числом";
    } else {
        return numA * numB;
    }
}

function calculateCube() {
    const input = prompt("Введите число:");
    const num = Number(input);
    
    if (isNaN(num)) {
        return "Переданный параметр не является числом";
    } else {
        const cube = num * num * num;
        return `${num} в кубе равняется ${cube}`;
    }
}


const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};


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
            alert(`🎉 Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
            return;
        }
        
    } while (true);
}


document.addEventListener('DOMContentLoaded', function() {
    const gameButtons = document.querySelectorAll('.game-detail__button');
    
    if (gameButtons.length > 0) {
        gameButtons[0].addEventListener('click', guessNumberGame);
    }
    
    const startButton = document.querySelector('.header__button');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.games').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    console.log("Все функции загружены!");
    console.log("Тестируем функции:");
    console.log("minNumber(8, 4):", minNumber(8, 4));
    console.log("checkEvenOdd(7):", checkEvenOdd(7));
    console.log("getSquare(5):", getSquare(5));
    console.log("circle1 площадь:", circle1.getArea().toFixed(2));
});