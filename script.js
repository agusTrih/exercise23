Number.prototype.powerFive = function () {
    let num = this;
    let eksponen5 = Math.pow(num, 5);

    return eksponen5;
};
let number = 4;
console.log(number.powerFive());
