<<<<<<< HEAD
function startGame1() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число:", targetNumber);

    while (true) {
        let guess = prompt("Угадай число от 1 до 100.");
        guess = Number(guess);

        if (isNaN(guess)) {
            alert("Некорректный ввод. Попробуй ещё раз.");
            continue;
        }

        if (guess === targetNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (guess < targetNumber) {
            alert("Число меньше загаданного. Попробуй ещё раз.");
        } else {
            alert("Число больше загаданного. Попробуй ещё раз.");
=======

function Game1() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    alert("Добро пожаловать в игру 'Угадай число'!\nЯ загадал число от 1 до 100.");
    
    while(true) {
        let guess = prompt("Введите ваше предположение:");
        
        if (guess === null) {
            alert("Игра отменена!");
            return;
        }
        
        guess = Number(guess);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Пожалуйста, введите число от 1 до 100!");
            continue;
        }
        
        attempts++;
        
        if (guess === secretNumber) {
            alert(`Поздравляю! Ты угадал(а) число ${secretNumber} за ${attempts} попыток!`);
            break;
        } else if (guess > secretNumber) {
            alert("Попробуй снова! Слишком много");
        } else if (guess < secretNumber) {
            alert("Попробуй снова! Слишком мало");
>>>>>>> 09f44d3e08ec86173242bcbe9cbd64a6c1fe6a0a
        }
    }
}

<<<<<<< HEAD
function startGame2() {
    const operations = ['+', '-', '*', '/'];

    while (true) {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operationIndex = Math.floor(Math.random() * operations.length);
        const operation = operations[operationIndex];
        let question;
        let correctAnswer;

        if (operation === '+') {
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
        }
        else if (operation === '-') {
            question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
            correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
        }
        else if (operation === '*') {
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
        }
        else if (operation === '/') {
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num1 = correctAnswer * num2;
            question = `${num1} / ${num2}`;
        }
        let userAnswer = prompt(`Решите задачу: ${question} = ?`);

        if (userAnswer === null) {
            alert("Игра завершена.");
            break;
        }

        userAnswer = Number(userAnswer);
        if (isNaN(userAnswer)) {
            alert("Некорректный ввод. Попробуйте ещё раз.");
            continue;
        }
        if (userAnswer === correctAnswer) {
            alert(`Правильно! ${question} = ${correctAnswer}`);
            break;
        }
        else {
            alert(`Неправильно. Правильный ответ: ${question} = ${correctAnswer}`);
        }
    }
}

function startGame3() {
    const userText = prompt("Введите текст, который нужно перевернуть:");
    if (userText !== null) {
        const reversedText = userText.split('').reverse().join('');
        alert(`Перевернутый текст: ${reversedText}`);
    } else {
        alert("Вы отменили ввод.");
    }
}

function startGame4() {
    const choices = ['камень', 'ножницы', 'бумага'];

    while (true) {
        const userChoiceIndex = parseInt(prompt(
            "Выберите:\n1. Камень\n2. Ножницы\n3. Бумага\nВведите номер вашего выбора (1, 2 или 3):"
        )) - 1;

        if (userChoiceIndex === null || isNaN(userChoiceIndex) || userChoiceIndex < 0 || userChoiceIndex > 2) {
            alert("Игра завершена.");
            break;
        }

        const userChoice = choices[userChoiceIndex];
        const computerChoiceIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerChoiceIndex];

        alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("Ничья! Попробуйте ещё раз.");
        } else if (
            (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень')
        ) {
            alert("Вы выиграли!");
            break;
        } else {
            alert("Вы проиграли! Попробуйте ещё раз.");
        }
    }
}

function startGame5() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
=======
function Game2() {
    alert("Добро пожаловать в игру 'Простая арифметика'!");
    
    let correctAnswers = 0;
    
    for (let i = 0; i < 3; i++) {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        
        let operation;
        let operationType = Math.floor(Math.random() * 4);
        
        if (operationType === 0) {
            operation = '+';
        } else if (operationType === 1) {
            operation = '-';
        } else if (operationType === 2) {
            operation = '*';
        } else {
            operation = '/';
        }

        if (operation === '-' && num1 < num2) {
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        
        if (operation === '/') {
            num1 = num1 * num2;
        }
        
        let problem = num1 + ' ' + operation + ' ' + num2;
        
        let correctAnswer;
        if (operation === '+') {
            correctAnswer = num1 + num2;
        } else if (operation === '-') {
            correctAnswer = num1 - num2;
        } else if (operation === '*') {
            correctAnswer = num1 * num2;
        } else { 
            correctAnswer = num1 / num2;
        }

        let userAnswer = prompt(`Задача ${i + 1}: ${problem} = ?`);

        if (userAnswer === null) {
            alert('Игра отменена!');
            return;
        }

        let userAnswerNumber = Number(userAnswer);

        if (isNaN(userAnswerNumber)) {
            alert(' Пожалуйста, вводите только числа!');
            i--;
        } 
        else if (userAnswerNumber === correctAnswer) {
            alert(' Правильно!');
            correctAnswers++;
        } else {
            alert(` Неправильно! Правильный ответ: ${correctAnswer}`);
        }
    }
    
    alert(`🏁 Игра окончена! Правильных ответов: ${correctAnswers} из 3`);
}

function Game3() {
    alert(" Добро пожаловать в игру 'Переверни текст'!");
    
    let userText = prompt("Введите текст, который нужно перевернуть:");
    
    if (userText === null) {
        alert("Игра отменена!");
        return;
    }
    
    if (userText.trim() === "") {
        alert("Вы не ввели текст!");
        return;
    }
    
    let reversedText = userText.split('').reverse().join('');
    
    alert(` Исходный текст: ${userText}\n Перевернутый текст: ${reversedText}`);
}

function Game4() {
    alert(" Добро пожаловать в игру 'Камень, ножницы, бумага'!");
    
    const options = ["камень", "ножницы", "бумага"];
    
    let userChoice = prompt("Сделайте ваш выбор:\n1. Камень\n2. Ножницы\n3. Бумага\n\nВведите название или номер (1, 2, 3):");
    
    if (userChoice === null) {
        alert("Игра отменена!");
        return;
    }
    
    userChoice = userChoice.toLowerCase().trim();
    
    if (userChoice === "1" || userChoice === "камень") {
        userChoice = "камень";
    } else if (userChoice === "2" || userChoice === "ножницы") {
        userChoice = "ножницы";
    } else if (userChoice === "3" || userChoice === "бумага") {
        userChoice = "бумага";
    } else {
        alert("Некорректный ввод! Пожалуйста, выберите 'камень', 'ножницы' или 'бумага'.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[randomIndex];
    
    let result;
    
    if (userChoice === computerChoice) {
        result = " Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = " Вы победили!";
    } else {
        result = " Компьютер победил!";
    }
    
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`);
}

function Game5() {
    alert(" Добро пожаловать в игру 'Простая викторина'!");
    
    const quiz = [
        {
            question: "Какого цвета небо в ясный день?",
            options: ["1. Красного", "2. Синего", "3. Желтого"],
>>>>>>> 09f44d3e08ec86173242bcbe9cbd64a6c1fe6a0a
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
<<<<<<< HEAD
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswersCount = 0;

    for (const item of quiz) {
        const userAnswer = prompt(`${item.question}\n${item.options.join('\n')}\nВведите номер правильного ответа:`);

        if (userAnswer === null) {
            alert("Вы отменили викторину.");
            return;
        }

        const answerNumber = parseInt(userAnswer);

        if (answerNumber === item.correctAnswer) {
            correctAnswersCount++;
        }
    }

    alert(`Вы правильно ответили на ${correctAnswersCount} из ${quiz.length} вопросов!`);
}

function startGame6(event) {
    if (event) {
        event.preventDefault();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const randomColor = getRandomColor();

    document.querySelector('.games').style.backgroundColor = randomColor;
    document.querySelector('.minigames').style.backgroundColor = randomColor;

    console.log(`Цвет фона изменен на: ${randomColor}`);
}
=======
            options: ["1. Четыре", "2. Шесть", "3. Пять"],
            correctAnswer: 3
        }
    ];
    
    let score = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}: ${currentQuestion.question}\n\n`;
        questionText += currentQuestion.options.join('\n');
        questionText += "\n\nВведите номер правильного ответа:";
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина отменена!");
            return;
        }
        
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            alert("Правильно!");
        } else {
            let correctOption = currentQuestion.options[currentQuestion.correctAnswer - 1];
            alert(`Неправильно! Правильный ответ: ${correctOption}`);
        }
    }

    alert(`Викторина завершена!\n\nВы правильно ответили на ${score} из ${quiz.length} вопросов.`);
}

function Game6() {
    // Находим секции
    const sections = document.querySelectorAll('section');
    const aboutSection = sections[1];
    const gamesSection = sections[2];
    
    if (!aboutSection || !gamesSection) {
        alert('Секции не найдены!');
        return;
    }
    
    // Генерируем один цвет
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Красим обе секции
    aboutSection.style.backgroundColor = randomColor;
    gamesSection.style.backgroundColor = randomColor;
    
    alert(`Цвет ${randomColor} применен!`);}
// 1 
console.log("\nзадание 1 ");
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));
console.log("Отсортированный массив людей по возрасту:");
people.sort((a, b) => a.age - b.age).forEach(person => {
    console.log(`${person.name}: ${person.age} лет`);
});

// 2
console.log("\nзадание 2 ");

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("Положительные числа из [3, -4, 1, 9]:");
console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log("\nМужчины из массива людей:");
console.log(filter(people2, isMale));

// 3 
console.log("\nзадание 3 ");

function showCurrentDate() {
    const now = new Date();
    console.log(`Текущая дата: ${now.toLocaleString()}`);
}

function dateTimer() {
    console.log("Запуск таймера (30 секунд)...");
    let secondsPassed = 0;
    
    const intervalId = setInterval(() => {
        showCurrentDate();
        secondsPassed += 3;
        
        if (secondsPassed >= 30) {
            clearInterval(intervalId);
            console.log("30 секунд прошло");
        }
    }, 3000);
}
// 4 
console.log("\nзадание 4 ");

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// 5
console.log("\nзадание 5 ");

function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб'));

console.log("\nвсе задания выполнены");

function smoothScrollToGame(gameId) {
    const gameElement = document.getElementById(gameId);
    if (gameElement) {
        gameElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Сайт загружен! Привязываем игры к кнопкам...");
    
    const gameCards = document.querySelectorAll('.games-preview__link');
    console.log(`Найдено карточек игр: ${gameCards.length}`);
    
    gameCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                smoothScrollToGame(href.substring(1));
            }
        });
    });
    
    const gameButtons = document.querySelectorAll('.game-detail__button');
    console.log(`Найдено кнопок: ${gameButtons.length}`);
    
    if (gameButtons[0]) {
        gameButtons[0].addEventListener('click', Game1);
        console.log("Кнопка 1: 'Угадай число' привязана");
    }
    
    if (gameButtons[1]) {
        gameButtons[1].addEventListener('click', Game2);
        console.log(" Кнопка 2: 'Простая арифметика' привязана");
    }
    
    if (gameButtons[2]) {
        gameButtons[2].addEventListener('click', Game3);
        console.log(" Кнопка 3: 'Переверни текст' привязана");
    }
    
    if (gameButtons[3]) {
        gameButtons[3].addEventListener('click', Game4);
        console.log(" Кнопка 4: 'Камень, ножницы, бумага' привязана");
    }
    
    if (gameButtons[4]) {
        gameButtons[4].addEventListener('click', Game5);
        console.log(" Кнопка 5: 'Викторина' привязана");
    }
    
    if (gameButtons[5]) {
        gameButtons[5].addEventListener('click', Game6);
        console.log(" Кнопка 6: 'Генератор случайных цветов' привязана");
    }
    
    const goButton = document.querySelector('#goButton');
    if (goButton) {
        goButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToGame('about');
        });
    }
    
    console.log("\n ВСЕ ИГРЫ УСПЕШНО ПРИВЯЗАНЫ!");
    console.log("1. Угадай число");
    console.log("2. Простая арифметика");
    console.log("3. Переверни текст");
    console.log("4. Камень, ножницы, бумага");
    console.log("5. Викторина");
    console.log("6. Генератор случайных цветов");
});
>>>>>>> 09f44d3e08ec86173242bcbe9cbd64a6c1fe6a0a
