const age = 20;

//if (age = 18) { //ONLY if age exactly
//if (age == 18) { //ONLY if age exactly equals 18 regardless if either is string or number
//if (age === 18) { //ONLY if age exactly equals 18 and is a number
//if (age >= 18) { //Greater or equal than 18
//if (age <= 18) { //Less or equal than 18 

if (age > 18) { //If you are older than 18 then
console.log("You are good to go!");
} else if (age < 15) { //If not 18 and below 1
    console.log("Wow you are really young.. why are you even here?");
} else { //If not 18, but older than 15
    console.log("You are not old enough");
}

const dice1 = 6;
const dice2 = 3;

if (dice ===6 && dice2 ===6) { //Both of these clauses need to be correct
    console.log('You rolled a double');
} else {
    console.log("You didn't")
}