'use strict';

let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let money = +prompt("Ваш бюджет на месяц?", "50000"); //бюджет на месяц
let time = prompt("Введите дату в формате YYYY-MM-DD");

appData.budget = money;
appData.timeData = time;
 
for (let i = 0; i < 2; i++) {
    let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце");
    let costItemExpenses = prompt("Во сколько обойдется?");

    if (typeof(itemExpenses) === "string" && typeof(itemExpenses) != null &&  typeof(costItemExpenses) != null &&
    itemExpenses != "" && costItemExpenses != "" && itemExpenses.length < 50) {
        console.log("done");
        appData.expenses[itemExpenses] = costItemExpenses;
    } else {
        console.log ("bad result");
        i--;

    }
}

/* let i = 0;
while (i < 2) {
    let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце");
    let costItemExpenses = prompt("Во сколько обойдется?");

    if (typeof(itemExpenses) === "string" && typeof(itemExpenses) != null &&  typeof(costItemExpenses) != null &&
    itemExpenses != "" && costItemExpenses != "" && itemExpenses.length < 50) {
        console.log("done");
        appData.expenses[itemExpenses] = costItemExpenses;
    } else {
    }
    i++;
}; */

/* let i = 0;
do {
    let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце");
    let costItemExpenses = prompt("Во сколько обойдется?");

    if (typeof(itemExpenses) === "string" && typeof(itemExpenses) != null &&  typeof(costItemExpenses) != null &&
    itemExpenses != "" && costItemExpenses != "" && itemExpenses.length < 50) {
        console.log("done");
        appData.expenses[itemExpenses] = costItemExpenses;
    } else {
    }
    i++;
} while (i < 2); */

appData.moneyPerDey = appData.budget/30;

alert("Ежедневный бюджет " + appData.moneyPerDey);

if (appData.moneyPerDey < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDey > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);
