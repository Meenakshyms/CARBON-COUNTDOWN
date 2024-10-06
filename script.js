// Function to update the year
function updateYear() {
    var year = document.getElementById("yearSlider").value;
    document.getElementById("selectedYear").textContent = year;
}

// Function to show GHG impact details (NASA images or maps)
function showImpact(impactName) {
    alert("Showing the impact of: " + impactName);
    // You can load NASA images or maps here
}
