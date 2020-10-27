console.log('Starting');
setTimeout(function () {
    console.log("Running");
}, 2000);
console.log("ending");

const go = document.querySelector(".go");
//Change the text to GO when clicked
go.addEventListener('click', function (e) {
    const el = e.currentTarget;
    console.log(el);
    setTimeout(function() {
        el.classList.add('circle');
    }, 2000);
})
//MAke it a circle after 2 seconds
//make it square after 0.5s
//make it square after 0.5s
//make it square after 0.5s
//make it square after 0.5s