const Complex = require('./complex.js').Complex;

function Vector(coefficients) {
    this.coefficients = coefficients;
    this.n = coefficients.length;

    Vector.prototype.sum = (x, y) => {
        let newCoefficients = []
        x.coefficients.map((complex,index) => newCoefficients.push(complex.sum(x.coefficients[index],y.coefficients[index])));
        return newCoefficients;
    }
}