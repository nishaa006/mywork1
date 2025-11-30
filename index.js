
let password = 'кошки';
let ask = prompt('Введите пароль');
if (ask === password){
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = 11;
if (c > 0 && c < 10){
    alert('Верно');
} else {
    alert('Неверно');
}

let d = 15;
let e = 9;
if (d > 100 || e > 100){
    alert('Верно');
} else {
    alert('Неверно');
}


let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let season = prompt('Введите номер месяца в году'); // исправлено опечатку
let monthNumber = parseInt(season);

if (monthNumber >= 1 && monthNumber <= 12){
    switch (monthNumber){
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
        default:
            alert("Неверный номер месяца");
    }
} else {
    alert("Введите число от 1 до 12");
}