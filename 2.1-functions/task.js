'use strict';
console.log('Task 1');
function getSolutions( a, b, c ) {
    const D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {
            D: D,
            roots: []
        };
    }
    if (D === 0) {
        const x1 = -b / (2 * a);
        return {
            D: D,
            roots: [ x1 ]
        };
    };
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [ x1, x2 ]
        };
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x**2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.roots.length === 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if(result.roots.length === 1) {
        console.log(`Уравнение имеет один корень x1 = ${result.roots [0]}`);
    } else {
        console.log(`Уравнение имеет два корня. x1 = ${result.roots [0]}, x2 = ${result.roots [1]}`);
    }
}


showSolutionsMessage (1,2, 3);
showSolutionsMessage (7,20, -3);
showSolutionsMessage (2,4, 2);

console.log('Task 2');
const inputData = {
    algebra : [2, 4, 5, 2, 3, 4],
    geometry : [2, 4, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 6],
    english : [4, 4, 3, ],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4]
};

function getAverageScore(data) {
    let result = {};
    let sum = 0;
    let i = 1;
    for (let prop in data) {
        result[prop] = getAverageMark(data[prop]);
        sum += result[prop];
        i++;
    }
    result.average = sum / i;

    console.log(result);
}
function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 10) {
        marks.splice(10);
        console.log('Вы ввели более десяти оценок! Расчет будет только на десять оценок');
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}
getAverageScore(inputData);


console.log('Task 3');
function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

function getDecodedValue(secret) {
    if (secret === 1) {
        return 'Эмильо';
    } else if (secret === 0) {
        return 'Родриго';
    }
}

console.log(getPersonData({aaa:0, bbb:0}));
console.log(getPersonData({aaa:1, bbb:0}));
console.log(getPersonData({aaa:0, bbb:1}));
console.log(getPersonData({aaa:1, bbb:1}));



// function getPersonData(secretData) {
//     return {
//         firstName: getDecodedValue(secretData.aaa),
//         lastName: getDecodedValue(secretData.bbb)
//     }
// }
//
// function getDecodedValue(secret) {
//     return secret ? 'Эмильо' : 'Родриго';
// }
//
// console.log(getPersonData({aaa:0, bbb:0}));
// console.log(getPersonData({aaa:1, bbb:0}));
// console.log(getPersonData({aaa:0, bbb:1}));
// console.log(getPersonData({aaa:1, bbb:1}));