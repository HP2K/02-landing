// Global Variables
const navbarMenu = document.getElementById("navbar__list");
var sections = document.querySelectorAll("section");
var navbarItem = document.getElementsByClassName('menu__link')


// Building navigation
function buildingNav(){
    for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
    section.addEventListener("click",(e)=>{
      e.preventDefault();
      item.scrollIntoView({behavior: "smooth"});
    })
  };
};
buildingNav();


// Add class 'active' to section when near top of viewport


for (var i = 0; i < navbarItem.length; i++) {
  navbarItem[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("your-active-class");
  current[0].className = current[0].className.replace(" your-active-class", "");
  this.className += " your-active-class";
  });
}



for (var i = 0; i < sections.length; i++) {
  sections[i].addEventListener("scroll", function() {
  const current = document.getElementsByClassName("your-active-class");
  current[0].className = current[0].className.replace(" your-active-class", "");
  this.className += " your-active-class";
  });
}


window.addEventListener("scroll", function () {
  if (sections.getBoundingClientRect().top < window.innerHeight) {
     sections.style.background = "#f8f8f8"
  }
});




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
