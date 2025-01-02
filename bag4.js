// Select the relevant elements
const decrementButton = document.getElementById("decrement-btn");
const incrementButton = document.getElementById("increment-btn");
const quantityDisplay = document.getElementById("quantity-display");

// Set the initial quantity value
let quantityValue = 1;

// Function to update the quantity display
function refreshQuantity() {
    quantityDisplay.textContent = quantityValue;
}

// Event listener for decreasing quantity
decrementButton.addEventListener("click", () => {
    if (quantityValue > 1) { // Ensure quantity doesn't go below 1
        quantityValue--;
        refreshQuantity();
    }
});

// Event listener for increasing quantity
incrementButton.addEventListener("click", () => {
    quantityValue++;
    refreshQuantity();
});

// Initialize the quantity display
refreshQuantity();
