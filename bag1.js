// Select the elements
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityNumber = document.getElementById('quantity-number');

// Add event listeners for button clicks
decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityNumber.textContent); // Get current value
    if (currentValue > 1) { // Prevent going below 1
        quantityNumber.textContent = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityNumber.textContent); // Get current value
    quantityNumber.textContent = currentValue + 1;
});

// Function to increase the quantity
increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityNumber.textContent = quantity;
});

//--------

