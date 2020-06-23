//String.prototype.isPalindrome - для задачи №1
let asd = 'А роза упала на лапу Азора';
String.prototype.isPalindrome = function() {
    // console.log('Normal 1.', this);
    // console.log('Normal 2.', this.toString());
    // console.log('Normal 3.', this.toString().toLowerCase());
    // console.log('Normal 4.', this.toString().toLowerCase().split(" "));
    // console.log('Normal 5.', this.toString().toLowerCase().split(" ").join(""));

    const normal = this.toString().toLowerCase().split(" ").join("");

    // console.log('Reverse 1.', normal);
    // console.log('Reverse 2.', normal.split(""));
    // console.log('Reverse 3.', normal.split("").reverse());
    // console.log('Reverse 4.', normal.split("").reverse().join(""));

    const reverse = normal.split("").reverse().join("");

    // if(reverse === normal) {
    //     return true;
    // } else {
    //     return false;
    // }

    return reverse === normal;
}

console.log(asd.isPalindrome());


function getAverageMark(marks) {
//     // код для задачи №2 писать здесь
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);
    return  roundedAverage;
}


function checkBirthday(birthday) {
//     // код для задачи №3 писать здесь
    const now = Date.now();
    let happyBirthday = new Date(birthday).getTime();
    let diff = happyBirthday - now;
    const age = diff / 31557600000;
// 31557600000 - это 1000 * 60 * 60 * 24 * 365,25.  365,25 - это среднее число дней в году, с учётом високосных

    if (age > 18) {
        return 'Совершеннолетний';
    } else {
        return 'Несовершеннолетний';
    }
}