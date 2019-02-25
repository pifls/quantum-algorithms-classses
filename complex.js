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
Complex.prototype.sub = (x, y) => {
    let subReal = x.real - y.real;
    let subImaginary = x.imaginary - y.imaginary;
    z = new Complex(subReal, subImaginary);
    return z;
}
Complex.prototype.multiply = (x, y) => {
    let multiplyReal = x.real * y.real - (x.imaginary * y.imaginary);
    let multiplyImaginary = x.real * y.imaginary + x.imaginary * y.real;
    z = new Complex(multiplyReal, multiplyImaginary);
    return z;
}