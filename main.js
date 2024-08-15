/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that both toggle and nav elements exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Toggle the show-menu class on the nav element
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When a nav__link is clicked, remove the show-menu class from the nav element
    navMenu.classList.remove('show-menu')
}
// Attach click event listeners to each nav__link
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SLIDESHOW ====================*/

// Initialize slideIndex to track the current slide
let slideIndex = 1;
showSlides(slideIndex);

// Function to show the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide based on index
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the slides and manage dots for active slide indication
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Reset slideIndex if it exceeds the number of slides
    if (n > slides.length) {slideIndex = 1}
    // Reset slideIndex if it goes below 1
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }
    
    // Display the current slide and add the active class to the corresponding dot
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
    }
}

// Automatically advance the slideshow every 5 seconds
setInterval(function() {
    showSlides(slideIndex += 1);
}, 5000);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// (Comment placeholder, seems the functionality is not implemented in the code snippet)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll position is greater than or equal to 200px, add the show-scroll class
    if(window.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
// Add scroll event listener to trigger the scrollTop function
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Retrieve previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Determine the current theme by checking if the darkTheme class is applied
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// Determine the current icon by checking if the iconTheme class is applied
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// If a theme was previously selected by the user, apply it
if (selectedTheme) {
  // Apply or remove the dark theme based on the user's previous choice
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Toggle the dark/light theme when the theme button is clicked
themeButton.addEventListener('click', () => {
    // Toggle the dark-theme and iconTheme classes
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the user's theme and icon preference to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
// (Comment placeholder, functionality related to printing on A4 sheet not provided in code snippet)

// Function to open the popup
function openPopup() {
    document.getElementById("infoPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("infoPopup").style.display = "none";
}

// Automatically open the popup when the page loads
window.onload = function() {
    openPopup(); // This will display the popup once the page has fully loaded
}
