
// JavaScript functionality for the static site
document.getElementById('settings-btn').addEventListener('click', function() {
    // Placeholder for settings button functionality
    alert('Settings feature will be implemented soon!');
});

document.getElementById('search-btn').addEventListener('click', function() {
    // Placeholder for search functionality
    let query = document.getElementById('search-input').value.trim();
    if(query) {
        alert('Search for: ' + query);
    } else {
        alert('Please enter a query.');
    }
});
