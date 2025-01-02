// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBYg9Ic5NYxj6mGncEk9prXd7OlPMUz5f8",
authDomain: "cs-pn-f5ac0.firebaseapp.com",
databaseURL: "https://cs-pn-f5ac0-default-rtdb.firebaseio.com",
projectId: "cs-pn-f5ac0",
storageBucket: "cs-pn-f5ac0.appspot.com",
messagingSenderId: "29471816373",
appId: "1:29471816373:web:d3d963245930f8ba399cfc",
measurementId: "G-NCVC43YGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);


document.addEventListener("DOMContentLoaded", function () {
    const auth = getAuth(); // Initialize Firebase Authentication

    auth.onAuthStateChanged((user) => {
        if (user) {
            const userId = user.uid; // Get the authenticated user's UID
            const userRef = ref(database, `users/${userId}`);

            // Fetch user's shopAvatar
            get(userRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        const profilePicture = userData.shopAvatar || "default-avatar.png"; // Fallback to default image

                        // Update profile picture on the dashboard
                        const profileImageElement = document.querySelector(".user-profile img"); // Adjust selector based on your HTML
                        if (profileImageElement) {
                            profileImageElement.src = profilePicture;
                        }
                    } else {
                        console.log("No user data found.");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data: ", error);
                });
        } else {
            console.log("No user is logged in.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the user profile div
    const userProfile = document.querySelector(".user-profile");

    if (userProfile) {
        userProfile.addEventListener("click", function () {
            // Redirect to the dashboard
            window.location.href = "ClientDash.html"; // Replace with your actual dashboard URL
        });
    } else {
        console.error("User profile element not found.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const searchInput = document.querySelector("#search-input");
    const dropdownSection = document.getElementById("dropdown-section");
    const recentSearchesContainer = document.createElement("div");
    const noResults = document.getElementById("no-results");
    const fabricItems = document.querySelectorAll(".fabric-item");
    const styleFailContainer = document.getElementById("style-fail");

    // Add a container for recent searches
    recentSearchesContainer.classList.add("recent-searches");
    dropdownSection.appendChild(recentSearchesContainer);

    // State
    let recentSearches = []; // Store recent searches

    /**
     * Helper Functions
     */

    // Show dropdown and match width to search input
    function showDropdown() {
        dropdownSection.style.width = `${searchInput.offsetWidth}px`;
        dropdownSection.style.display = "block";
        renderRecentSearches();
    }

    // Hide dropdown
    function hideDropdown() {
        dropdownSection.style.display = "none";
    }

    // Perform search and toggle visibility of results
    function performSearch(query) {
        let hasResults = false;

        fabricItems.forEach((item) => {
            const fabricName = item.querySelector(".fabric-name").innerText.toLowerCase();

            if (fabricName.includes(query)) {
                item.style.display = "block";
                hasResults = true;
            } else {
                item.style.display = "none";
            }
        });

        // Toggle "No Results Found" message
        if (!hasResults && query.trim() !== "") {
            noResults.classList.remove("hidden");
            dropdownSection.style.display = "none";
        } else {
            noResults.classList.add("hidden");
            dropdownSection.style.display = "block";
        }
    }

    // Add a new recent search
    function addRecentSearch(searchTerm) {
        if (searchTerm && !recentSearches.includes(searchTerm)) {
            recentSearches.unshift(searchTerm); // Add to the start of the array
            if (recentSearches.length > 5) recentSearches.pop(); // Limit to 5 recent searches
        }
        renderRecentSearches();
    }

    // Render recent searches
    function renderRecentSearches() {
        if (recentSearches.length === 0) {
            recentSearchesContainer.innerHTML = "<p>No recent searches</p>";
        } else {
            recentSearchesContainer.innerHTML = ` 
                <h3>Recent Searches</h3>
                <ul>
                    ${recentSearches.map(search => `<li>${search}</li>`).join("")}
                </ul>
            `;
        }
    }

    // Handle fabric item click
    function setupFabricClick() {
        fabricItems.forEach((item) => {
            item.addEventListener("click", () => {
                const fabricName = item.querySelector(".fabric-name").innerText;
                alert(`You selected: ${fabricName}`);
            });
        });
    }

    /**
     * Error Handling for Template Loading
     */

    // Simulate a failure to load templates (Modify this based on real conditions)
    function loadTemplates() {
        const success = false; // Set to `true` to simulate success

        if (!success) {
            displayError("Templates failed to load. Please refresh or try again later.");
        }
    }

    // Function to display an error message dynamically
    function displayError(message) {
        const errorContainer = document.getElementById("style-fail");
        const errorMessage = errorContainer.querySelector(".style-fail-description");

        errorMessage.innerText = message;
        errorContainer.classList.remove("hidden"); // Show the error container
    }

    // Function to hide the error message
    function hideError() {
        const errorContainer = document.getElementById("style-fail");
        errorContainer.classList.add("hidden");
    }

    // Hide the error message when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInside = event.target.closest("#style-fail");
        if (!isClickInside) {
            hideError();
        }
    });

    // Call loadTemplates to simulate error handling
    loadTemplates();

    // Simulate template loading
    loadTemplates();

    /**
     * Event Listeners
     */

    // Show dropdown on focus
    searchInput.addEventListener("focus", showDropdown);

    // Live search on input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        performSearch(query);
    });

    // Add recent search and perform search on Enter keypress
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                addRecentSearch(searchTerm);
                performSearch(searchTerm.toLowerCase());
                searchInput.value = ""; // Clear input
            }
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInside = searchInput.contains(event.target) || dropdownSection.contains(event.target);
        if (!isClickInside) {
            hideDropdown();
        }
    });

    // Keep dropdown visible when clicking inside
    dropdownSection.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Adjust dropdown width on window resize
    window.addEventListener("resize", () => {
        dropdownSection.style.width = `${searchInput.offsetWidth}px`;
    });

    // Set up click functionality for fabric items
    setupFabricClick();
});
