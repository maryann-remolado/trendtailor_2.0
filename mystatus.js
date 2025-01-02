document.addEventListener("DOMContentLoaded", function() {
    // Show "To Stitch" by default when the page loads
    window.onload = function() {
        document.getElementById("box-w").style.display = "block";
        setActiveMenu('to-stitch'); // Set "To Stitch" as the default active menu
    };

    // Event listeners for menu items
    document.querySelectorAll('[data-tooltip]').forEach(function(item) {
        item.addEventListener('click', function() {
            const menuClass = this.getAttribute('data-tooltip').toLowerCase().replace(' ', '-');
            showSection(menuClass); // Call function to show corresponding section
            setActiveMenu(menuClass);
        });
    });

    // Function to show a specific section based on menu class
    function showSection(className) {
        hideAllBoxes();
        const box = document.getElementById(`box-${className}`);
        if (box) box.style.display = "block";
    }

    // Function to set the active menu
    function setActiveMenu(className) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-tooltip="${className.replace('-', ' ')}"]`).classList.add('active');
    }

    // Function to hide all sections
    function hideAllBoxes() {
        document.getElementById("box-w").style.display = "block";
        document.getElementById("box-r").style.display = "none";
        document.getElementById("box-i").style.display = "none";
        document.getElementById("box-s").style.display = "none";
    }
});
