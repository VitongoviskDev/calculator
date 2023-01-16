let num1 = "ND";
let num2 = "ND";
let operator = "none";

function operate(){
    let result = 0;
    console.log(operator);
    switch(operator){
        case "div":
            result = divide(num1, num2);
            break;
        case "mult":
            result = multiply(num1, num2);
            break;
        case "sub":
            result = subtract(num1, num2);
            break;
        case "sum":
            result = sum(num1, num2);
            break;
    }
    let expresion = `${num1} ${getOperatorChar(operator)} ${num2}`;
    console.log(result);
    UpdateExpressionUi(expresion);
    UpdateResultUi(result);
    operator = "none";
    num1 = 0;
    num2 = 0;
    return null;
}
function divide(num1, num2){
    if(num2 == 0)
        return "Não é possivel dividir por zero";
    else{
        return num1 / num2;
    }
}
function multiply(num1, num2){
    return (num1 * num2);
}
function subtract(num1, num2){
    return (num1 - num2);
}
function sum(num1, num2){
    return (num1 + num2);
}

function setNum(){
    if(event.target.value == "percent" && num1 != "ND" && num2 != "ND" && operator != "none"){
        num2 = num1 / 100 * num2;
        UpdateResultUi(num2);
    }
    else if(operator == "none"){
        num1 = num1 == "ND" ? event.target.value : num1 + event.target.value;
        UpdateResultUi(num1);
    }
    else {
        num2 = num2 == "ND" ? event.target.value : num2 + event.target.value;
        UpdateResultUi(num2);
    }
}

function setOperator(){
    if(num1 != "ND"){
        operator = event.target.value;
        let expresion = `${num1} ${getOperatorChar(operator)}`;
        UpdateExpressionUi(expresion)
    }
}

function getOperatorChar(value){
    switch(value){
        case "div":
            return "÷";
        case "mult":
            return "x";
        case "sub":
            return "-";
        case "sum":
            return "+";
    }
}

const resultDiv = document.querySelector(".result");
function UpdateResultUi(result){
    resultDiv.textContent = result;
}

const expressionDiv = document.querySelector(".expression");
function UpdateExpressionUi(expression){
    expressionDiv.textContent = expression;
}