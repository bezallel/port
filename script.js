

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
    

// sticky header

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    }); 

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    })


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
// portfolio section

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



// Ensure the DOM is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const certificationsLink = document.getElementById('certifications-link');
    const certificationsPopup = document.getElementById('popup-certifications');

    certificationsLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleCertificationsPopup();
    });

    certificationsPopup.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    function toggleCertificationsPopup() {
        if (certificationsPopup.classList.contains('show')) {
            certificationsPopup.classList.remove('show');
        } else {
            certificationsPopup.classList.add('show');
        }
    }
});
