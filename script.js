let add = function (num1, num2) {
    let result = num1 + num2;
    return result;
}
let substract = function (num1, num2) {
    let result = num1 - num2;
    return result;
}
let multiply = function (num1, num2) {
    let result = num1 * num2;
    return result;
}
let divide = function (num1, num2) {
    let result = num1 / num2;
    return result;
}

let operate = function (num1, operator, num2) {
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

let container = document.querySelector("#container");
const screenContainer = document.createElement("div");
const buttonsContainer = document.createElement("div");
screenContainer.setAttribute("id", "screencontainer");
buttonsContainer.setAttribute("id", "buttonscontainer");
container.appendChild(screenContainer);
container.appendChild(buttonsContainer);
const screen = document.createElement("textarea")
screen.setAttribute("id", "screen");
screenContainer.appendChild(screen);
let keysArr = ["C", "Del", "X", "7", "8", "9", "/", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=" ];
let num1 = "";
let num2 = "";
let operator = "";



for (let i = 0; i <= 4; i++) {
    let buttonLines = document.createElement("div");
    buttonsContainer.appendChild(buttonLines);
    buttonLines.setAttribute("id", "buttonLine" + [i]);
    buttonLines.setAttribute("class", "buttonLines");
    if (i > 0 && i < 4) {
        for (let j = 3; j <= 6; j++ ) {
            let button = document.createElement("button");
            let idNumber = (4* ([i] - 1));
            let idNumber2 = parseInt(idNumber) + parseInt([j]);
            buttonLines.appendChild(button);
            button.setAttribute("class", "button");
            button.setAttribute("id", "button" + idNumber2);
            button.textContent = keysArr[idNumber2];
            button.addEventListener("click", function () {
                console.log(operator)
                if (keysArr[idNumber2] !== "/" && keysArr[idNumber2] !== "X" && keysArr[idNumber2] !== "-" && keysArr[idNumber2] !== "+" && keysArr[idNumber2] !== "=" && keysArr[idNumber2] !== "C" && keysArr[idNumber2] !== "Del") {
                    num1 += parseInt(keysArr[idNumber2]);
                }
            });

        };    
    }else if (i == 0) { for (let k = 0; k < 3; k++){
        let button = document.createElement("button");
        buttonLines.appendChild(button);
        button.setAttribute("class", "button");
        button.setAttribute("id", "button" + [k]);
        button.textContent = keysArr[k];
        button.addEventListener("click", function () {

          
        });
    }
    }else for (let l = 15; l < 18; l++) {
        let button = document.createElement("button");
        buttonLines.appendChild(button);
        button.setAttribute("class", "button");
        button.setAttribute("id", "button" + [l]);
        button.textContent = keysArr[l];
        button.addEventListener("click", function () {

          
        });
    }
}
