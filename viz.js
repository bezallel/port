// JavaScript to handle the modal functionality
function openModal(imageSrc, projectLink) {
    // Get modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalLink = document.getElementById("modal-link");

    // Set the image and link in the modal
    modalImg.src = imageSrc;
    modalLink.href = projectLink;

    // Delay the display of the modal by 3 seconds (3000 milliseconds)
    setTimeout(function() {
        // Display the modal after the delay
        modal.style.display = "block";
    }, 1000);  // 3000 milliseconds = 3 seconds
}

// Close the modal when the user clicks the close button or outside the modal
document.querySelector('.close').onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
