document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the device is a mobile device
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // Function to check if the device is in landscape mode
    function isLandscape() {
        return window.matchMedia("(orientation: landscape)").matches;
    }

    // Function to display message for switching to landscape mode on mobile devices
    function displayLandscapeMessage() {
        const landscapeMessage = document.createElement("div");
        landscapeMessage.textContent = "Please switch to landscape mode for the best experience.";
        landscapeMessage.style.color = "red";
        landscapeMessage.style.textAlign = "center";
        landscapeMessage.style.position = "fixed";
        landscapeMessage.style.top = "50%";
        landscapeMessage.style.left = "50%";
        landscapeMessage.style.transform = "translate(-50%, -50%)";
        landscapeMessage.style.fontFamily = "cursive"; // Set font to cursive
        landscapeMessage.style.fontSize = "1em"; //set the font to 1em
        landscapeMessage.style.filter = "blur(5px)"; // Apply blur effect to background
        landscapeMessage.classList.add("landscape-message"); // Add class for removal
        document.body.appendChild(landscapeMessage);
    }

    // Check if the device is a mobile device and in landscape mode on page load
    if (isMobileDevice() && !isLandscape()) {
        displayLandscapeMessage();
    }

    // Check orientation change and display message if necessary on mobile devices
    window.addEventListener("orientationchange", function() {
        if (isMobileDevice() && !isLandscape()) {
            displayLandscapeMessage();
        } else {
            // Remove the landscape mode message if the device is in landscape mode or not a mobile device
            const landscapeMessage = document.querySelector(".landscape-message");
            if (landscapeMessage) {
                landscapeMessage.remove();
            }
        }
    });
});
