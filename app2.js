function makePizza(toppings) {
    const pizzaPromise = new Promise(function (resolve, reject) {
        //wait 1 second for the pizza to cook
        setTimeout(function() {
            resolve(`Here is your pizza with the toppings ${toppings.join('')}`);
        }, 1000);
        
        //when you are ready you can resolve this promise

        //if something went wrong, we can reject this promise
    });
    return pizzaPromise;
}

const pepperoniPromise = makePizza(['pepperoni']);
const canadianPromise = makePizza(['pepperoni', 'mushrooms', 'onions'])

console.log(pepperoniPromise.value, canadianPromise);

makePizza(['pepperoni']).then(function (pizza) {
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
}).then(function (pizza) {
    console.log(pizza);
    return makePizza(['hot pepers', 'onion', 'feta']);
}).then(function (pizza) {
    console.log(pizza);
    return makePizza();
}).then(function (pizza) {
    console.log(pizza);
    return makePizza(['one', 'two', 'three']);
}).then(function (pizza) {
    console.log("All done!");
})

//Run concurrently
const pizzaPromise1 = makePizza(['hot peppers', 'union', 'feta']);
const pizzaPromise2 = makePizza(['one', 'two', 'three']);
const pizzaPromise3 = makePizza(['ham', 'cheese']);

const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

dinnerPromise.then(function ([hottie, garbagePail, hamAndCheese]) {
    console.log(hottie, garbagePail, hamAndCheese);
})

//pizzaPromise1.then(pizza => {
//    console.log(pizza);
//})
//pizzaPromise2.then(pizza => {
//    console.log(pizza);
//})
//pizzaPromise3.then(pizza => {
//    console.log(pizza);
//})