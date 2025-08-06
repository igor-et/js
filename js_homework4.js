"use strict";

let count; // аргумент для ф-ції checkProbabilityTheory як кількість чисел, що мають бути згенеровані
let countOfGenerated = 0; // каунтер згенерованих чисел
let countEvenNum = 0; // каунтер парних
let countOddNum = 0; // каунтер непарних


function checkProbabilityTheory(count) {
    if (typeof count !== "number" || count <= 0) {
        console.log("Невірна введена кількість для генерації. Встановлено значення за замовчуванням: 10"); // цю перевірку піддивився, бо ізначально моя ф-я просто повертала count без валідації
        return 10;
    }
    return count;
}

function getRandom(a, b){                           // Функція для генерації рандомних чисел
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

count = checkProbabilityTheory(0);

console.log("Згенеровані рандомні числа: ");

for (let i = 0; i < count; i++) {
    let funcRes = getRandom(100, 1000);
    //console.log(funcRes);
    countOfGenerated ++;

    if (funcRes % 2 === 0) {
        countEvenNum ++;
        console.log("парне: ", funcRes);
    } else {
        countOddNum ++;
        console.log("непарне: ", funcRes);
    }
}

console.log("Кількість згенерованиих чисел: ", countOfGenerated);
console.log("Кількість парних чисел: ", countEvenNum);
console.log("Кількість непарних чисел: ", countOddNum);


function getPercentage(even, odd) {                           // Функція для підрахунку % парних від непарних з урахуванням, 
                                                              // що кількість непарних може бути = 0
    console.log("...Рахуємо процент парних до непарних...")
    if (odd !== 0) {
        let percentageEvenToOdd = (even / odd) * 100;
        console.log("Процент парних до непарних: ", percentageEvenToOdd.toFixed(2) + "%");
        if (percentageEvenToOdd.toFixed(2) === "50.00") {        // тут перевіряємо процент на чи співпадає з 50%50
        console.log("!!! jack pot 50 % of luck !!!");
        }
    } else {
        console.log("Не можемо порахувати процент парних до непарних, бо кількість непарних дорівнює 0, а на 0 не ділимо");
    }
    
}
getPercentage (countEvenNum, countOddNum);








