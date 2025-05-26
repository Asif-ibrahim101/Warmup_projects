let Decrease = document.getElementById("decrease");
let Increase = document.getElementById("increase");
let Reset = document.getElementById("reset");
let counter = document.getElementById("count");


// Reset button functionality
Reset.addEventListener('click', ()=> {

    //if the counter is already at zero, alert the user
    if(parseInt(counter.innerText) < 0) {
       alert("the counter is already at zero!");
    };

    //reset the counter to zero
    alert("Counter has been reset to zero!");
    counter.innerText = 0;
});


// Decrease functionality
Decrease.addEventListener('click', ()=> {
    counter.innerText = parseInt(counter.innerText) - 1;

    if(parseInt(counter.innerText) < 0) {
        counter.innerText = 0;
        alert("Counter cannot go below zero!");
    };
});

//increase functionality      
Increase.addEventListener('click', ()=> {
    counter.innerText = parseInt(counter.innerText) + 1;
});

