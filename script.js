// Store the scroll position before the page reloads
window.onbeforeunload = function() {
    localStorage.setItem("scrollPosition", window.scrollY);
};

// Restore the scroll position after the page reloads
window.onload = function() {
    if (localStorage.getItem("scrollPosition") !== null) {
        window.scrollTo(0, localStorage.getItem("scrollPosition"));
    }
};

let appointmentCount = 5845; // Set initial appointment count

// Function to format the count with commas
function formatCount(count) {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to update the appointment count
function updateAppointmentCount() {
    // Generate a random number between 1 and 10 for increase
    const randomIncrease = Math.floor(Math.random() * 10) + 1;

    // Update the appointment count
    appointmentCount += randomIncrease;

    // Display the updated count
    document.getElementById('appointmentCount').textContent = formatCount(appointmentCount);
}

// Function to randomly increase the count every 1-5 seconds
function startCountdown() {
    setInterval(updateAppointmentCount, Math.random() * 4000 + 1000); // Between 1 to 5 seconds
}

// Start the countdown
startCountdown();
