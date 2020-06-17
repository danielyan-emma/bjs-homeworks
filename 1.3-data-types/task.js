'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (isNaN(percent)) {
        console.log(`Параметр "процентная ставка" содержит неправильное значение ${percent}`);
    } else if (isNaN(contribution)) {
        console.log(`Параметр "начальный взнос" содержит неправильное значение ${contribution}`);
    } else if (isNaN(amount)) {
        console.log(`Параметр "общая стоимость" содержит неправильное значение ${amount}`);
    } else if (isNaN(date)) {
        console.log(`Параметр "срок ипотеки" содержит неправильное значение ${date}`);
    } else {
        let refundBank = amount - contribution;
        let monthPaid = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        let p = (percent / 100) / 12;
        let monthlyFee = refundBank * (p + p / (((1 + p) ** monthPaid) - 1));
        let totalAmount = parseFloat((monthPaid * monthlyFee).toFixed(2));
        console.log(totalAmount);
        return totalAmount;
    }
}



function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name === '' || name === null || typeof name === 'undefined') {
        name = 'Аноним';
    }
    return (`Привет, мир! Меня зовут ${name}`);
}

// if (name === '' || name === 'null' || name === 'undefined') {
//     name = 'Аноним';
// }
// return (`Привет, мир! Меня зовут ${name}`);
// }
// }

