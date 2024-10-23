// Add your code here
// index.js

// Function to submit data to the server
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const resultsDiv = document.getElementById('results');
        const newId = document.createElement('p');
        newId.textContent = `New user ID: ${data.id}`;
        resultsDiv.appendChild(newId);
    })
    .catch(error => {
        const resultsDiv = document.getElementById('results');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        resultsDiv.appendChild(errorMessage);
    });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value; // Get the name input value
        const email = document.getElementById('email').value; // Get the email input value

        // Call submitData with the collected name and email
        submitData(name, email);
        
        // Clear the form inputs after submission
        form.reset();
    });
});

// Export the submitData function for testing
module.exports = submitData;
