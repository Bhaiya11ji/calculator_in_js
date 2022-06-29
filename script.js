let numbers = document.getElementsByClassName("numbers"),
operators = document.getElementsByClassName("operator"),
display = document.getElementById("display"),
display2 = document.getElementById("backDisplay"),
answerBtn = document.getElementById("equalTo"),
clearBtn = document.getElementById("clear"),
clearOneBtn = document.getElementById("back"),
firstOperand,
secondOperand,
currentOperator;

function calculate(a, b, o) {
    a = Number(a);
    b = Number(b);
    switch (o) {
        case '+':
            return a+b;    
        case '-':
            return a-b;    
        case '*':
            return a*b;    
        case '/':
            return a/b;    
        default:
            break;
    }
}

Array.from(numbers).forEach((element) => {
    element.onclick = () => {
        if (currentOperator) {
            if (secondOperand) {
                secondOperand += element.value;
                display.innerText += element.value;
            } else {
                secondOperand = element.value;
                display.innerText = element.value;
                // display2.innerText = firstOperand;
            }
        }
        else {
            if (firstOperand) {
                firstOperand += element.value
                display.innerText += element.value;
            } else {
                firstOperand = element.value;
                display.innerText = element.value;
            }
        }
    }
})

Array.from(operators).forEach((element) => {
    element.onclick = () => {
        if (currentOperator) {
            if (firstOperand == undefined|| secondOperand == undefined) {
                console.log("incomplete equation")
            }
            else {
                a = calculate(firstOperand, secondOperand, currentOperator);
                firstOperand = a;
                secondOperand = 0;
                display.innerText = "";
                display2.innerText = a + currentOperator; 
            }
        } else {
            currentOperator = element.value;
            display2.innerText = firstOperand + currentOperator;
            display.innerText = "";
        }
    }
})

answerBtn.onclick = () => {
    a = calculate(firstOperand, secondOperand, currentOperator);    
    display.innerText = a;
    display2.innerText = "";
    firstOperand = a;
    secondOperand = undefined;
    currentOperator = undefined;
}
clearBtn.onclick = () => {
    firstOperand = undefined;
    secondOperand = undefined;
    currentOperator = undefined;
    display.innerText = 0;
    display2.innerText = 0;
}
clearOneBtn.onclick = () => {
    if (currentOperator) {
        if (secondOperand) {
            secondOperand = secondOperand.slice(0, secondOperand.length -1)
            display.innerText = secondOperand;
        }
    }
    else {
        if (firstOperand) {
            firstOperand = firstOperand.slice(0, firstOperand.length -1)
            display.innerText = firstOperand;
        }
    }
}