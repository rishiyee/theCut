let progressText = document.getElementById("progress");
let preloader = document.getElementById("preloader");
let content = document.getElementById("content");
let progress = 0;

let interval = setInterval(() => {
    progress++;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
        clearInterval(interval);
        preloader.style.display = 'none'; // Hide the preloader
        content.style.display = 'block'; // Show the main content
    }
}, 50); // Adjust the speed of counting by changing the interval (in milliseconds)

// Optional: Hide preloader once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Your code to check if resources are loaded can go here
});
