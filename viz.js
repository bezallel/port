// JavaScript to handle the modal functionality
function openModal(imageSrc, projectLink) {
    // Get modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalLink = document.getElementById("modal-link");

    // Change image source based on screen size
    if (window.innerWidth <= 930) { // For smaller screens
        if (imageSrc.includes("supply.png")) {
            modalImg.src = './images/supplains.png'; // Smaller image for supply
        } else if (imageSrc.includes("invest.png")) {
            modalImg.src = './images/involi.png'; // Smaller image for invest
        }
        else if (imageSrc.includes("HR ANALYTIC.png")) {
            modalImg.src = './images/atritt.png'; // Smaller image for invest
        }
        else if (imageSrc.includes("housing.png")) {
            modalImg.src = './images/haus.png'; // Smaller image for invest
        }
        else if (imageSrc.includes("BUSINESS PERF.png")) {
            modalImg.src = './images/busperf.png'; // Smaller image for invest
        }
        else if (imageSrc.includes("bank churn.png")) {
            modalImg.src = './images/banny.png'; // Smaller image for invest
        }
        // Add more conditions as needed for other images
        else {
            modalImg.src = imageSrc; // Default for larger images
        }
    } else {
        modalImg.src = imageSrc; // Default for larger screens
    }

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

// Function to handle the card expansion
function toggleCard(card) {
    // Check if the screen width is 430 pixels or below
    if (window.innerWidth > 430) {
        return; // Do nothing if the screen is wider than 430 pixels
    }

    const isExpanded = card.classList.contains('expanded');
    
    // Collapse all cards
    document.querySelectorAll('.card').forEach(c => {
        c.classList.remove('expanded');
        c.style.height = '50px'; // Set collapsed height
    });

    // If the clicked card was not already expanded, expand it
    if (!isExpanded) {
        card.classList.add('expanded');
        card.style.height = '150px'; // Set the desired expanded height
    }
}

// Attach the click event to each card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this);
    });
});
