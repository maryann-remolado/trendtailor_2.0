// Select the Cancel button and the container with class 'wht'
const cancelButton = document.querySelector('#cancelButton');
const productForm = document.querySelector('.wht');

// Add an event listener to the Cancel button
cancelButton.addEventListener('click', () => {
    productForm.style.display = 'none'; // Hide the 'wht' container
});
