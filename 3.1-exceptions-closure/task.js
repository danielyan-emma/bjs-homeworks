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
            const validateResult = parseCount(value);
            return validateResult;
        } catch (e) {
            return 'Невалидное значение';
        }
}


console.log('Task 2');
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a+b)<c & (a+c)<b & (b+c)<a) {
            throw new Error('Треугольник с такими сторонами не существует');
    }
    }

    getPerimeter() {
        const perimetr = (this.a + this.b + this.c);
        return perimetr;
    }

    getArea() {
        const p = (a + b + c) / 2;
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        let area = s.toFixed(3);
        return area;
    }

    getTriangle(a, b, c) {
        try {
            let newTriangle = new Triangle(a, b, c);
            return newTriangle;
        } catch (e) {
            return 'Ошибка! Треугольник не существует';
        }
    }
}


