//Function defintion
function calculateBill(bill = 100, taxRate = 0.13, tipRate = 0.15) { //Use local vars (Parameters) not global in a function
  //This is the function body
  console.log("Running Calculate Bill!!")
  const total = bill + bill * (taxRate + tipRate); //Remember PEMDAS
  return total;
}

const wesTotal = 500;
const wesTaxRate = 0.3;

const myTotal = calculateBill(wesTotal, wesTaxRate); //Arguments in functions

console.log(myTotal);

//Function definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

//const greeting = sayHiTo('Wes');
//console.log(greeting);

//const myTotal3 = calculateBill(20+20+20+30+20, 0.15);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = "Silly Goose") { //It's okay to reuse parameters. Set a default
    return `HEY ${name.toUpperCase()}`;
}

//yell(doctorize('melvin'));

const myBill4 = calculateBill(100, 0.13, 0);
console.log(myBill4);