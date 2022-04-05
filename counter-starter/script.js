function add(step) {
    // console.log("add function");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}


function add2(input) {
    // console.log("add function");
    let numberElement = document.getElementById("number1").value;
    let number1 = numberElement.innerText;
    number = parseInt(number1) + parseInt(number1);
    numberElement.innerText = number1;
}