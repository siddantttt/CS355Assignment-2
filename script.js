 const params = new URLSearchParams(location.search);
 const fields = [
     { label: "First Name", key: "first_name" },
     { label: "Last Name", key: "last_name" },
     { label: "Email", key: "email" },
     { label: "Gender", key: "gender" },
     { label: "Date of Birth", key: "dob" },
     { label: "Street Address", key: "street" },
     { label: "Zip Code", key: "zip" },
     { label: "Do you like Kanye West?", key: "q1" },
     { label: "What is Kanye's best album to you?", key: "q2" }
 ];
 const resultsContainer = document.getElementById("results");
 fields.forEach(field => {
     const value = params.get(field.key); // Get the value from URLSearchParams
     // Create a new div for each key-value pair
     const resultItem = document.createElement("div");
     resultItem.className = "item";
     // Label and Value for each field
     resultItem.innerHTML = `
         <div><span>${field.label}:</span></div>
         <div>${value || 'Not Provided'}</div>
     `;
     // Append the item to the container
     resultsContainer.appendChild(resultItem);
 });

 // Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save the current mode to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Check if dark mode is enabled in localStorage on page load
window.onload = function() {
    const darkModeSetting = localStorage.getItem('darkMode');
    
    // If dark mode was enabled previously, set it to dark mode
    if (darkModeSetting === 'enabled') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    // Create the toggle button for dark mode
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerText = 'Toggle Dark Mode';
    darkModeToggle.addEventListener('click', toggleDarkMode);
    document.body.appendChild(darkModeToggle);
};

