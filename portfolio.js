// Get the "Add New Portfolio" button
const addPortfolioBtn = document.getElementById('addPortfolioBtn');

// Get the "New Portfolio Box" container
const newPortfolioBox = document.querySelector('newBox');

// Add event listener to the button
addPortfolioBtn.addEventListener('click', function () {
    // Toggle visibility of the new portfolio box
    if (newPortfolioBox.style.display === 'none') {
        newPortfolioBox.style.display = 'block '; // Show the box
    } else {
        newPortfolioBox.style.display = 'none'; // Hide the box
    }
});


