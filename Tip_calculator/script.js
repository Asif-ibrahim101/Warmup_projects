let billAmount = document.getElementById('bill-amount');
let peopleCount = document.getElementById('people-count');
let tipAmount = document.querySelector('.tip-amount .result-value');
let totalBill = document.querySelector('.total-bill .result-value');
let perPerson = document.querySelector('.per-person-box .result-value');
let resetBtn = document.querySelector('.reset-btn');
let customTip = document.getElementById('custom-tip');
let tipButtons = document.querySelectorAll('.tip-btn');

//increase or decrease the number of people
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');

let selectedTip = 15; // default tip percentage

//increase the number of people
increaseBtn.addEventListener('click', () => {
    peopleCount.value++;
    calculateTip();
});

//decrease the number of people
decreaseBtn.addEventListener('click', () => {
    peopleCount.value--;
    if (peopleCount.value < 1) {
        alert("the number of people cannot be less than 1");
        peopleCount.value = 1;
    }
    calculateTip();
});

// Handle tip button clicks
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tipButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Update selected tip
        selectedTip = parseFloat(button.dataset.tip);
        // Clear custom tip input
        customTip.value = '';
        calculateTip();
    });
});

// Handle custom tip input
customTip.addEventListener('input', () => {
    // Remove active class from all buttons
    tipButtons.forEach(btn => btn.classList.remove('active'));
    // Update selected tip
    selectedTip = parseFloat(customTip.value) || 0;
    calculateTip();
});

//reseting the calculator
resetBtn.addEventListener('click', () => {
    billAmount.value = '';
    peopleCount.value = '1';
    customTip.value = '';
    tipButtons.forEach(btn => btn.classList.remove('active'));
    selectedTip = 15;
    tipAmount.textContent = '$0.00';
    totalBill.textContent = '$0.00';
    perPerson.textContent = '$0.00';
});

//calculating the tip and total bill
billAmount.addEventListener('input', () => {
    calculateTip();
});

peopleCount.addEventListener('input', () => {
    calculateTip();
});

function calculateTip() {
    const bill = parseFloat(billAmount.value) || 0;
    const people = parseInt(peopleCount.value) || 1;
    const tip = bill * (selectedTip / 100);
    const total = bill + tip;
    const perPersonAmount = total / people;

    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalBill.textContent = `$${total.toFixed(2)}`;
    perPerson.textContent = `$${perPersonAmount.toFixed(2)}`;
}
