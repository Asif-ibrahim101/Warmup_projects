let billAmount = document.getElementById('bill-amount');
let peopleCount = document.getElementById('people-count');
let tipAmount = document.querySelector('.tip-amount .result-value');
let totalBill = document.querySelector('.total-bill .result-value');
let perPerson = document.querySelector('.per-person-box .result-value');
let resetBtn = document.querySelector('.reset-btn');
let customTip = document.getElementById('custom-tip');
let tipButtons = document.querySelectorAll('.tip-btn');
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');

let selectedTip = 15; // default tip percentage

// Increase the number of people
increaseBtn.addEventListener('click', () => {
    peopleCount.value = parseInt(peopleCount.value) + 1;
    calculateTip();
});

// Decrease the number of people
decreaseBtn.addEventListener('click', () => {
    let currentCount = parseInt(peopleCount.value);
    if (currentCount > 1) {
        peopleCount.value = currentCount - 1;
    } else {
        alert("The number of people cannot be less than 1");
    }
    calculateTip();
});

// Handle tip button clicks
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedTip = parseFloat(button.dataset.tip);
        customTip.value = '';
        calculateTip();
    });
});

// Handle custom tip input
customTip.addEventListener('input', () => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    selectedTip = parseFloat(customTip.value.replace(/[^\d.]/g, '')) || 0;
    calculateTip();
});

// Reset the calculator
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

// Calculate tip and total bill
function calculateTip() {
    const bill = parseFloat(billAmount.value) || 0;
    let people = parseInt(peopleCount.value);

    if (!billAmount.value || isNaN(bill) || bill <= 0) {
        tipAmount.textContent = '$0.00';
        totalBill.textContent = '$0.00';
        perPerson.textContent = '$0.00';
        return;
    }

    if (isNaN(people) || people < 1) {
        people = 1;
        peopleCount.value = 1;
    }

    const tip = bill * (selectedTip / 100);
    const total = bill + tip;
    const perPersonAmount = total / people;

    tipAmount.textContent = `$${tip.toFixed(2)}`;
    totalBill.textContent = `$${total.toFixed(2)}`;
    perPerson.textContent = `$${perPersonAmount.toFixed(2)}`;
}

// Trigger calculation on input
billAmount.addEventListener('input', calculateTip);
peopleCount.addEventListener('input', () => {
    if (parseInt(peopleCount.value) < 1 || isNaN(peopleCount.value)) {
        peopleCount.value = 1;
    }
    calculateTip();
});
