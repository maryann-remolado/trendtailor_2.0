// Select the button and the form container
const addProductButton = document.querySelector('.add-prdct-btn');
const productForm = document.querySelector('.wht');
const cancelButton = document.querySelector('#cancelButton');

// Show the form when the "Add New Product" button is clicked
addProductButton.addEventListener('click', () => {
    productForm.style.display = 'block'; // Show the form
});

// Hide the form when the "Cancel" button is clicked
cancelButton.addEventListener('click', () => {
    productForm.style.display = 'none'; // Hide the form
});


document.getElementById('productImages').addEventListener('change', function (event) {
    const imageFrame = document.getElementById('imagePreviewFrame');
    imageFrame.innerHTML = ''; // Clear previous previews
    const files = event.target.files;

    if (files.length > 3) {
        alert('You can upload a maximum of 3 images.');
        event.target.value = ''; // Clear the file input
        return;
    }

    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                imageFrame.appendChild(img); // Add the image to the frame
            };
            reader.readAsDataURL(file);
        } else {
            alert('Only image files are allowed.');
        }
    });
});


