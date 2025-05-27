// Array of random colors
const colors = [
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Turquoise
    '#45B7D1', // Sky Blue
    '#96CEB4', // Sage Green
    '#FFEEAD',  // Cream Yellow
    'black',
    'white',
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
];

let colorFliper = document.getElementById('flip-btn');

colorFliper.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomcolor = colors[randomIndex];

    document.body.style.backgroundColor = randomcolor;
});