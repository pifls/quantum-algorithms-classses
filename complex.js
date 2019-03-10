function Complex(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
}

Complex.prototype.sum = (x, y) => {
    let sumReal = x.real + y.real;
    let sumImaginary = x.imaginary + y.imaginary;
    return new Complex(sumReal, sumImaginary);
}
Complex.prototype.subtract = (x, y) => {
    let subReal = x.real - y.real;
    let subImaginary = x.imaginary - y.imaginary;
    return new Complex(subReal, subImaginary);
}
Complex.prototype.multiply = (x, y) => {
    let mulReal = x.real * y.real - (x.imaginary * y.imaginary);
    let mulImaginary = x.real * y.imaginary + x.imaginary * y.real;
    return new Complex(mulReal, mulImaginary);
}
Complex.prototype.divide = (x, y) => {
    let con = y.conjugate();
    let up = x.multiply(x,con);
    let down = x.multiply(y, con);
    return new Complex(up.real / down.real, up.imaginary / down.real);
}
Complex.prototype.conjugate = function() {
    return new Complex(this.real, - this.imaginary);
}
Complex.prototype.modulus = function() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
}
Complex.prototype.trigonometric = function() {
    modulus = this.modulus();
    sin = this.imaginary / modulus;
    cos = this.real / modulus;
    return Math.atan2(sin, cos);
    // return Math.atan2(sin, cos) * 180 / Math.PI;
}

module.exports = {Complex: Complex};