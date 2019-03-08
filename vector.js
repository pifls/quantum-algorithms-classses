const Complex = require('./complex.js').Complex;

function Vector(coefficients) {
    this.coefficients = coefficients;
    this.n = coefficients.length;

    Vector.prototype.sum = (v1, v2) => {
        let newCoefficients = []
        v1.coefficients.map((coefficient,index) => newCoefficients.push(coefficient.sum(coefficients[index],v2.coefficients[index])));
        return new Vector(newCoefficients);
    }
    Vector.prototype.multiplyByScalar = (v, scalar) => {
        let newCoefficients = []
        v.coefficients.map((coefficient,index) => newCoefficients.push(coefficient.multiply(x.coefficients[index], scalar)));
        return new Vector(newCoefficients);
    }
}