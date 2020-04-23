'use strict';

let money;
let time;

let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

start();

appData.budget = money;
appData.timeData = time;

chooseExpenses();

appData.moneyPerDey = (appData.budget/30).toFixed();

alert("Ежедневный бюджет " + appData.moneyPerDey);

checkSavings ();

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

function start() {
    money = +prompt("Ваш бюджет на месяц?", "50000"); //бюджет на месяц
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }
}
 
function chooseExpenses() {
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
}

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let persent = +prompt("Под какой процент?");

        appData.monthIncome = save*persent/100/12;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}