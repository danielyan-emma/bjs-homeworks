'use strict';
console.log('Task 1');
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state (value) {
        this._state = Math.max(0, Math.min(100, value));
    }
    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'detective';
    }
}

const picknick = new FantasticBook(
    "Пикник на обочине",
    1972,
    168,
    "Аркадий и Борис Стругацкие"
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15



console.log('Task 2');
class Library {
    constructor(name, books) {
        this.name = 'name';
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let book = null;
        for (let i of this.books){
            if (value === i[type]) {
                book = i;
                break;
            }
        }
        return book;
    }
    giveBookByName(bookName) {
        let book = null;
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].name === bookName) {
                book = this.books.splice(i, 1);
                break;
            }
        }

        return book;
    }
}

const library = new Library(
    "Библиотека имени Ленина",
    []
);

library.addBook(new DetectiveBook("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008, "Артур Конан Дойл"));
library.addBook(new FantasticBook("Пикник на обочине", 1972, 168, "Аркадий и Борис Стругацкие"));
library.addBook(new NovelBook("Машина времени", 1895, 138, "Герберт Уэллс"));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


console.log('Task 3');

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }


    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade >= 1 && grade <= 5) {
            if(!this.grades.hasOwnProperty(subject)) {
                this.grades[subject] = [];
            }
            this.grades[subject].push(grade);

            console.log(grade, subject, this.grades);
            return this.grades[subject].length;
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
            return 0;
        }
    }

    getAverageBySubject(subject) {
        if (this.subject.length <= 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this.subject.length; i++) {
            sum += this.subject[i];
            const average = sum / this.subject.length;
            return average;
        }
    }

    getTotalAverage() {
        let sum = 0;
        let count = 0;
        for(let subject in this.grades) {
            for(let grade of this.grades[subject]) {
                sum += grade;
                count++;
            }
        }

        console.log(sum, count);

        return (count > 0) ? (sum / count) : 0;
    }
}

const log = new StudentLog('Олег Никифоров');


console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 0


log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75