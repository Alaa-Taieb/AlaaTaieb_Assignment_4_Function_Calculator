var num1 = "";
var num2 = "";
var operator = "";
var display = document.querySelector('#display');
console.log(display);

/* A function that sets the numbers of the equation */
function press(number){
    // If the operator is still null (truthy), that means that we are yet to define the first number
    // So any number we type would be added to num1
    // If the operator isn't null (falsy), that means that we have set the num1.
    // So any number we type would be added to num2
    if(operator){
        num2 += number;
        display.innerText = num2;
    }else{
        num1 += number;
        display.innerText = num1;
    }
    /* DEBUGGING */
    /* 
    console.log(`Num1 : ${num1}`);
    console.log(`Num2 : ${num2}`); 
    */
}

/* A function that sets the operator of the equation */
function setOP(op){
    operator = op;
    /* DEBUGGING */
    /* 
    console.log(`Operator : ${operator}`); 
    */
}
/* A function that resets all variables to the default values */
function clr(){
    display.innerText = "0";
    num1 = '';
    num2 = '';
    operator = '';
}

/* A function that calculates the result of the equation */
function calculate(){
    // Eval is a built in function that can calculate an equation in form of string
    var result = eval(num1 + operator + num2);
    // We display the result in the display element
    display.innerText = result;
    // We set the num1 to result so that now we can directly perform operations on this number
    num1 = result;
    // We reset both num2 and operator so we can set them again.
    num2 = '';
    operator = '';
}