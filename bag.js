// Function to open the shop page when the title is clicked
function openShopPage() {
    window.location.href = "shop-page.html"; // Replace with your shop's URL
}

function navigateToMessagePage() {
    window.location.href = "shop-page.html"; // Replace with your shop's URL
}

// Function to toggle the order box icon between checked and unchecked
function toggleOrderBox(element) {
    const icon = element.querySelector("i");
    if (icon.classList.contains("bi-square")) {
        icon.classList.remove("bi-square");
        icon.classList.add("bi-check-square-fill"); // Checked box icon
        element.classList.add("checked");
    } else {
        icon.classList.remove("bi-check-square-fill");
        icon.classList.add("bi-square"); // Unchecked box icon
        element.classList.remove("checked");
    }
}

