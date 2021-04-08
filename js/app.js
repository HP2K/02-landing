// Global Variables
const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");


// Building navigation
function buildingNav(){
    for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
    };};
    buildingNav();


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


// Add class 'active' to section when it is near top of viewport


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
