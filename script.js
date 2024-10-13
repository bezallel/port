$(document).ready(function(){
    // Initialize Slick carousel
    $('#slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        adaptiveHeight: true, // Ensures the height adapts to content
    });

    // Filter functionality (optional, if you're using filter buttons)
    $('.category-filters button').click(function(){
        var filterValue = $(this).attr('data-filter');
        
        // Reset all filters first
        $('#slide').slick('slickUnfilter');
        
        if (filterValue !== 'all') {
            $('#slide').slick('slickFilter', function(index, slide){
                return $(slide).hasClass(filterValue);
            });
        }
    });
});

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// sticky header and scroll sections
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove redundant custom carousel navigation logic
// The Slick carousel already handles this functionality natively
// Hence, there's no need for the custom 'next' and 'prev' navigation logic

// Ensure the DOM is loaded before executing additional scripts (non-carousel-related)
document.addEventListener('DOMContentLoaded', function () {
    const certificationsLink = document.getElementById('certifications-link');
    const certificationsPopup = document.getElementById('popup-certifications');

    if (certificationsLink && certificationsPopup) {
        certificationsLink.addEventListener('click', function (e) {
            e.preventDefault();
            toggleCertificationsPopup();
        });

        certificationsPopup.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent closing when clicking inside the popup
        });

        // Close the popup when clicking anywhere outside of it
        document.addEventListener('click', function (e) {
            if (!certificationsPopup.contains(e.target) && !certificationsLink.contains(e.target)) {
                certificationsPopup.classList.remove('show');
            }
        });

        function toggleCertificationsPopup() {
            certificationsPopup.classList.toggle('show');
        }
    }
});
