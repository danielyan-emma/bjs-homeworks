'use strict';
// 2x^2+4x-3=0
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let descr = b ** 2 - 4 * a * c;
    if (descr < 0) {
        console.log('Решений нет, так как дискриминант меньше нуля.');
        return [];
    }

    let x1 = (-b + Math.sqrt(descr)) / (2 * a);
    let x2 = (-b - Math.sqrt(descr)) / (2 * a);
    if (descr === 0) {
        return [x1];
    };

    if (descr > 0) {
        return [x1, x2];
    }
};


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        marks.splice(5);
        console.log('Вы ввели более пяти оценок! Расчет будет только на первые пять оценок');
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return  sum / marks.length;
}


function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let nowYear = new Date().getFullYear();
    let userYear = dateOfBirthday.getFullYear();
    if ((nowYear - userYear) > 18) {
        return (`Не желаете ли олд-фэшн ${name}`);
    }else{
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
}

// Чтобы получить количество лет на основе только года:
// let get_current_age = function(date) {
//     return new Date().getFullYear() - date;
// };
// alert(get_current_age(1986));

