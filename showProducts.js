// Example of toggling the right sidebar visibility
document.getElementById('toggleButton').addEventListener('click', function() {
    const rightSide = document.getElementById('rightSide');
    if (rightSide.style.display === 'none' || rightSide.style.display === '') {
        rightSide.style.display = 'block'; // Show the sidebar
        hideAllSections(); // Hide all sections
        showProfile(); // Show profile by default
    } else {
        rightSide.style.display = 'none'; // Hide the sidebar
    }
});

function hideAllSections() {
    document.getElementById('product-section').style.display = 'none';
    document.getElementById('fabrics-section').style.display = 'none';
    document.getElementById('new-arrivals-section').style.display = 'none';
    document.getElementById('profileSection').style.display = 'none';
}