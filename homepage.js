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

    /**
     * Error Handling for Template Loading
     */

    // Simulate a failure to load templates (You can modify this based on real error conditions)
    function loadTemplates() {
        const success = false; // Set to `true` to simulate success

        if (!success) {
            styleFailContainer.classList.remove("hidden"); // Show the error container
        }
    }

    // Hide the error message when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#style-fail") && !event.target.closest("#search-input")) {
            styleFailContainer.classList.add("hidden");
        }
    });

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

});
