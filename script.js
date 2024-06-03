
let input_string = "";
let calculatorScreen = document.getElementById("screen");


//FUNCTION TO TAKE INPUT STRING AND RETURN ANSWER
function calculate(){
    let input = input_string;
    result = eval(input);
    console.log(result);
    input_string = result;
    calculatorScreen.value = input_string;
    return result;
}

function append(button_value){
    input_string = input_string + button_value ;
    calculatorScreen.value = input_string
    console.log(input_string)
    return input_string;
}

function clearScreen(){
    input_string = "" ;
    calculatorScreen.value = input_string
    return input_string;
}