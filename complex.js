function Complex(real, imaginary){
    this.real = real;
    this.imaginary = imaginary;
}

Complex.prototype.sum = (x, y) => {
    let sumReal = x.real + y.real;
    let sumImaginary = x.imaginary + y.imaginary;
    z = new Complex(sumReal, sumImaginary);
    return z;
}
Complex.prototype.subtract = (x, y) => {
    let subReal = x.real - y.real;
    let subImaginary = x.imaginary - y.imaginary;
    z = new Complex(subReal, subImaginary);
    return z;
}
Complex.prototype.multiply = (x, y) => {
    let mulReal = x.real * y.real - (x.imaginary * y.imaginary);
    let mulImaginary = x.real * y.imaginary + x.imaginary * y.real;
    z = new Complex(mulReal, mulImaginary);
    return z;
}
Complex.prototype.divide = (x, y) => {
    let con = y.conjugate();
    let up = x.multiply(x,con);
    let down = x.multiply(y, con);
    z = new Complex(up.real / down.real, up.imaginary / down.real);
    return z;
}
Complex.prototype.conjugate = function() {
    z = new Complex(this.real, - this.imaginary);
    return z;
}
Complex.prototype.modulus = function() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
}
Complex.prototype.trigonometric = function() {
    modulus = this.modulus();
    sin = this.imaginary / modulus;
    cos = this.real / modulus;
    alfa = Math.atan2(sin, cos);
    return alfa;
}