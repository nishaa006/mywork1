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