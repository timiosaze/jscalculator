
let previousNumber = 0;
let currentNumber = 0;
let actionValue = '';
let setValue = '';
let actionSet = false;
let hasPrevious = false;
document.getElementById('output').innerText = previousNumber.toString();
//The function for the inserting numbers to the output
function number(value){    
    if(!hasPrevious){
        const output = document.getElementById('output').innerText;
        if(previousNumber == 0 && output.indexOf('.') == -1){
            previousNumber = value;
            document.getElementById('output').innerText =previousNumber;
            currentNumber = Number(previousNumber);
        } else {
            document.getElementById('output').innerText =output.concat(value);
            currentNumber = Number(output.concat(value));
        }
    } else {
        document.getElementById('output').innerText = value;
        currentNumber = Number(value);
        hasPrevious = false;
    }
}
// The button for adding . to the number
function addPoint(){
    const output = document.getElementById('output').innerText;
    if(output.indexOf('.') == -1){
        document.getElementById('output').innerText = output.concat('.');
    }
}
function roundUp(value){
    return +(Math.round(value + "e+2") + "e-2");
}
//The equals to operator =
function equalsTo(){
    if(actionSet == true && (previousNumber != 0 || currentNumber != 0)){
        let solution;
        switch (setValue) {
            case 'add':
                console.log('add');
                solution = add(previousNumber,currentNumber);
                break;
            case 'subtract':
                solution = subtract(previousNumber,currentNumber);
                break;
            case 'divide':
                solution = divide(previousNumber,currentNumber);
                break;
            case 'multiply':
                solution = multiply(previousNumber,currentNumber);
                break;
            default:
                break;
        }
        console.log(roundUp(solution));
        document.getElementById('output').innerText = roundUp(solution).toString();
    }
    actionSet = true;   
    previousNumber = Number(document.getElementById('output').innerText);
    currentNumber = 0;
}
//The arithmetic operators + / * -
function action(value){
    hasPrevious = true;
    setValue = value;
    if(actionSet == true && previousNumber != 0 && currentNumber != 0){
        let solution;
        switch (value) {
            case 'add':
                solution = add(previousNumber,currentNumber);
                break;
            case 'subtract':
                solution = subtract(previousNumber,currentNumber);
                break;
            case 'divide':
                solution = divide(previousNumber,currentNumber);
                break;
            case 'multiply':
                solution = multiply(previousNumber,currentNumber);
                break;
            default:
                break;
        }
        // let solution = previousNumber + currentNumber;
        console.log(roundUp(solution));
        document.getElementById('output').innerText = roundUp(solution).toString();
    }
    actionSet = true;   
    previousNumber = Number(document.getElementById('output').innerText);
    currentNumber = 0;
}
//Clear the output by clicking on CE
function clearOutput(){
    previousNumber = 0;
    currentNumber = 0;
    hasPrevious = false;
    actionSet = false;
    document.getElementById("output").innerText = previousNumber.toString();
}
