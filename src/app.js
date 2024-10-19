let previousNumber = 0;
let currentNumber = 0;
let actionValue = '';
let setValue = '';
let actionSet = false;
let hasPrevious = false;
function number(value){
    if(!hasPrevious){
        const output = document.getElementById('output').innerText;
        document.getElementById('output').innerText = output.concat(value);
        currentNumber = Number(output.concat(value));
        console.log(currentNumber);
    } else {
        console.log(previousNumber);
        document.getElementById('output').innerText = value;
        currentNumber = Number(value);
        hasPrevious = false;
    }
}
function addPoint(){
    const output = document.getElementById('output').innerText;
    if(output.indexOf('.') == -1){
        document.getElementById('output').innerText = output.concat('.');
    }
}
function roundUp(value){
    return +(Math.round(value + "e+2") + "e-2");
}
function equalsTo(){
    if(actionSet == true && (previousNumber != 0 || currentNumber != 0)){
        let solution;
        switch (setValue) {
            case 'add':
                solution = previousNumber + currentNumber;
                break;
            case 'subtract':
                solution = previousNumber - currentNumber;
                break;
            case 'divide':
                solution = previousNumber / currentNumber;
                break;
            case 'multiply':
                solution = previousNumber * currentNumber;
                break;
            default:
                break;
        }
        // let solution = previousNumber + currentNumber;
        console.log(roundUp(solution));
        document.getElementById('output').innerText = roundUp(solution).toString();
    }

}
function action(value){
    // actionValue = value;
    hasPrevious = true;
    setValue = value;
    if(actionSet == true && previousNumber != 0 && currentNumber != 0){
        let solution;
        switch (value) {
            case 'add':
                solution = previousNumber + currentNumber;
                break;
            case 'subtract':
                solution = previousNumber - currentNumber;
                break;
            case 'divide':
                solution = previousNumber / currentNumber;
                break;
            case 'multiply':
                solution = previousNumber * currentNumber;
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
function clearOutput(){
    previousNumber = 0;
    currentNumber = 0;
    hasPrevious = false;
    actionSet = false;
    document.getElementById("output").innerText = '';
    console.log(previousNumber, currentNumber, hasPrevious, actionSet);
}