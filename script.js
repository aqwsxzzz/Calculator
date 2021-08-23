let add = function (a, b) {
    let result = a + b;
    return result;
}
let substract = function (a, b) {
    let result = a - b;
    return result;
}
let multiply = function (a, b) {
    let result = a * b;
    return result;
}
let divide = function (a, b) {
    let result = a / b;
    return result;
}

let operate = function (operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }else if (operator === "-") {
        return substract(num1, num2);
    }else if (operator === "*") {
        return multiply(num1, num2);
    }else if (operator === "/") {
        return divide(num1, num2);
    }
}
console.log(divide(20, 4))