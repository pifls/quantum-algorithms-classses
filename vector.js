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
    Vector.prototype.product = (v1,v2) => {
        let result = new Complex(0,0)
        let multiplyResult = []
        for(let i = 0; i < v1.n; i++){
            multiplyResult[i] = result.multiply(v1.coefficients[i], v2.coefficients[i].conjugate(v2.coefficients[i]));
        }
        for(let i = 0; i < multiplyResult.length; i++) {
            result = result.sum(result, multiplyResult[i]);
        }
        return result;
    }
    Vector.prototype.norm = v => {
        product = v.product(v,v);
        return new Complex(Math.sqrt(product.real), 0);
    }
}