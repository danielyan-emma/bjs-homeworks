'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (isNaN(percent)) {
        return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
    }
    if (isNaN(contribution)) {
        return `Параметр "начальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (isNaN(amount)) {
        return `Параметр "общая стоимость" содержит неправильное значение ${amount}`;
    }
    if (isNaN(date)) {
        return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
    } else {
        const refundBank = amount - contribution;
        const monthPaid = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        const p = (percent / 100) / 12;
        const monthlyFee = refundBank * (p + p / (((1 + p) ** monthPaid) - 1));
        const totalAmount = parseFloat((monthPaid * monthlyFee).toFixed(2));
        console.log(totalAmount);
        return totalAmount;
    }
}



function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name === '' || name === null || typeof name === undefined) {
    }
    return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
}

// if (name === '' || name === 'null' || name === 'undefined') {
//     name = 'Аноним';
// }
// return (`Привет, мир! Меня зовут ${name}`);
// }
// }




