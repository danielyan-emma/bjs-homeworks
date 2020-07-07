console.log('Task 1');
function parseCount(num) {
    const parseResult = Number.parseInt(num, 10);
    if (isNaN(parseResult)) {
        throw new Error ('Невалидное значение');
    }
    return parseResult;
}

function validateCount(value) {
        try {
            return parseCount(value);
        } catch (e) {
            return new Error ('Невалидное значение');
        }
}


console.log('Task 2');
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a+b)<c || (a+c)<b || (b+c)<a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        let area = parseFloat(s.toFixed(3));
        return area;
    }
}

function getTriangle(a, b, c) {
    let instance;

    try {
        instance = new Triangle(a, b, c);
    } catch (e) {
        let message = 'Ошибка! Треугольник не существует';
        instance = {
            getArea() {
                return message;
            },
            getPerimeter() {
                return message;
            }
        }
    }

    return instance;
}

// console.log(getTriangle(1, 2, 2).getPerimeter());


