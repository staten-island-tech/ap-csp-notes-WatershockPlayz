
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

toUpper(names); //Calling the function
toUpper(youtuber); //Calling the function
//adder(5, 10);

//const toUpper = () =>{ //Shortest way to write the function

//}





////////////////////Javascript String Concatenation/////////////////////////////

const myAge = 16; //Variable set to value of 16
const yourAge = 24;

console.log(myAge + yourAge); //Adds ages together

const name = "Melvin";

const combined = name + myAge;


console.log(combined); //Will always be a String

console.log('Hello my name is ' + 'Ed'); //Adds the Strings together
console.log('Hello my name it\'s Ed'); //Fix issues

console.log(`Hello it's me and my name is ${name}` ); //How to use javascript in a string is to use: ${}