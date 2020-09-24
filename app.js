
//////////////////////Javascript Functions and Parameters///////////////////////

const names = "Dev Ed"; //Const Variable in global scope , see Lesson 1 (Or not, it's pretty easy to remember)
const youtuber =  "Traversy Media";

function adder(num1, num2) { //Local variables created in paranthesis
    console.log(num1 + num2);
}

function logger() { //A function is a series of commands that can be called when the function is called with copying and pasting
    //const name = "Dev Ed"; //Only available in the function, local scpe
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
}

function toUpper(text) { //Editing text to become Upper case
    const upperCased = text.toUpperCase(); //Creates a new variable and makes it Upper case version of text.
    console.log(upperCased);
}

//toUpper(names); //Calling the function
//toUpper(youtuber); //Calling the function
//adder(5, 10);

//const toUpper = () =>{ //Shortest way to write the function

//}





////////////////////Javascript String Concatenation/////////////////////////////

const myAge = 16; //Variable set to value of 16
const yourAge = 24;

//console.log(myAge + yourAge); //Adds ages together

const name = "Melvin";

const combined = name + myAge;


//console.log(combined); //Will always be a String

//console.log('Hello my name is ' + 'Ed'); //Adds the Strings together
//console.log('Hello my name it\'s Ed'); //Fix issues

//console.log(`Hello it's me and my name is ${name}` ); //How to use javascript in a string is to use: ${}

//////////////////////////MATH////////////////////////////////

const num1 = 100;
const num2 = 100;
let val;

val = num1 + num2; //Simple Math with numbers ADD
val = num1 - num2; //Simple Math with numbers SUBTRACT
val = num1 * num2; //Simple Math with numbers MULTIPLY
val = num1 / num2; //Simple Math with numbers DIVIDE
val = num1 % num2; //Simple Math with numbers PERCENT

//Math Object
val = Math.PI; //PI
val = Math.E; //e
val = Math.round(2.8); //round to the nearest integer
val = Math.ceil(2.4); //round up
val = Math.floor(2.8); //round down
val = Math.sqrt(64); //Squar Root
val = Math.abs(-3); //Absolute value
val = Math.pow(8, 2); //Power
val = Math.min(100, 80, 70, 73, -10, 8, 23, 45, 93); //Minimum value from a list
val = Math.max(100, 80, 70, 73, -10, 8, 23, 45, 93); //Maximum value from a list
val = Math.random(); //Random decimal number

val = Math.random() * 20; //Random decimal number that is multiplied by 1

val = Math.floor(Math.random() * 20 + 1); //Random number rounded down above 0


console.log(val);
