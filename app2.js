const user = { //Called like a variable, but everything in the brackets is a property of an OBJECT
    name: 'Edwin', //string
    age: 24, //Integer/Float (Number)
    married: false, //Boolean
    purchases: ["phone", "car", "laptop"],//array

sayName: function() { //can also call a function in OBJECT
    console.log(this.name); //refers to THIS object and the variable NAME
}

};

console.log(user.purchases); //OBJECT.

function apples() { //functions are saved under a massive WINDOW opbject
    console.log('Apple');
}

//THIS

window.apples(); //All functions are saved under a windows object

user.sayName(); 