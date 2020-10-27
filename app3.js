function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function go() {
    console.log('Starting');
    await wait(2000);
    console.log('Running');
    await wait(2000);
    console.log('ending');
}
go();

//function decleration
async function fd() {}

//arrow function
const arrowFn = async () => {}

//call back
window.addEventListener('click', async function () {

})

//
const person = {
    //method
    sayHi: async function() {

    },
    //method shorthand
    async sayHello() {

    },
    //function property
}