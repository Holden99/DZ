"use strict";

let money,
    time;
  money = +prompt("Ваш бюджет на месяц?" , " ");
 time = prompt("Введите дату в формате YYYY-MM-DD" , " ");
 let arr = [];
  let appData = {
    budget: money,
    timeData: time,
    expenses: {
       answer1: " ",
       answer2: " "
    },
    optionalExpenses : {

    },
    income: arr,
    savings: false
  };

appData.expenses.answer1 = +prompt
("Введите обязательную статью расходов в этом месяце");
appData.expenses.answer2 = +prompt("Во сколько обойдется?");

alert("Бюджет пользователя на 1 день = " + (money/30));
console.log(appData.expenses.answer1);