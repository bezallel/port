function openModal(mediaSrc, projectLink) {
    // Get modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const modalLink = document.getElementById("modal-link");

    // Reset the modal content
    modalImg.style.display = "none"; // Hide the image by default
    modalVideo.style.display = "none"; // Hide the video by default
    modalVideo.src = ""; // Clear previous video source

    // Check if the media is a video (ends with .mp4)
    if (mediaSrc.endsWith(".mp4")) {
        // Show the video element
        modalVideo.src = mediaSrc;
        modalVideo.style.display = "block"; // Show video
        modalVideo.autoplay = true; // Auto play
        modalVideo.loop = true; // Loop the video
        modalVideo.muted = true; // Mute the video to enable autoplay in most browsers
        modalVideo.controls = false; // Hide the video controls (progress bar, play/pause, etc.)
        modalVideo.load(); // Ensure the video is loaded
    } else {
        // Change image source based on screen size (for images)
        if (window.innerWidth <= 930) { // For smaller screens
            if (mediaSrc.includes("supply.png")) {
                modalImg.src = './images/supplains.png'; // Smaller image for supply
            } else if (mediaSrc.includes("invest.png")) {
                modalImg.src = './images/involi.png'; // Smaller image for invest
            } else if (mediaSrc.includes("HR ANALYTIC.png")) {
                modalImg.src = './images/atritt.png'; // Smaller image for HR Analytics
            } else if (mediaSrc.includes("housing.png")) {
                modalImg.src = './images/haus.png'; // Smaller image for Housing
            } else if (mediaSrc.includes("BUSINESS PERF.png")) {
                modalImg.src = './images/busperf.png'; // Smaller image for Business Perf
            } else if (mediaSrc.includes("bank churn.png")) {
                modalImg.src = './images/banny.png'; // Smaller image for Bank Churn
            } else {
                modalImg.src = mediaSrc; // Default for other images
            }
        } else {
            modalImg.src = mediaSrc; // Default for larger screens
        }

        // Show the image element
        modalImg.style.display = "block"; // Show image
    }

    modalLink.href = projectLink;

    // Delay the display of the modal by 1 second (1000 milliseconds)
    setTimeout(function() {
        modal.style.display = "block";
    }, 1000); // 1000 milliseconds = 1 second
}

// Close the modal when the user clicks the close button or outside the modal
document.querySelector('.close').onclick = function() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Pause the video when closing the modal
    const modalVideo = document.getElementById("modal-video");
    if (modalVideo) {
        modalVideo.pause(); // Pause the video
        modalVideo.src = ""; // Reset the video source
    }
};

// Handle outside clicks to close the modal
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";

        // Pause the video when closing the modal
        const modalVideo = document.getElementById("modal-video");
        if (modalVideo) {
            modalVideo.pause(); // Pause the video
            modalVideo.src = ""; // Reset the video source
        }
    }
};
