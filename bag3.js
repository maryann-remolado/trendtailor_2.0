 // Quantity controls
 const decreaseBtn = document.getElementById('decrease-btn');
 const increaseBtn = document.getElementById('increase-btn');
 const quantityNumber = document.getElementById('quantity-number');

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

 // Size dropdown
 const sizeDropdown = document.getElementById('size-dropdown');
 const selectedSize = document.getElementById('selected-size');

 sizeDropdown.addEventListener('change', () => {
     selectedSize.textContent = `Selected Size: ${sizeDropdown.value}`;
 });

 // Color dropdown
 const colorDropdown = document.getElementById('color-dropdown');
 const selectedColor = document.getElementById('selected-color');

 colorDropdown.addEventListener('change', () => {
     selectedColor.textContent = `Selected Color: ${colorDropdown.value}`;
 });