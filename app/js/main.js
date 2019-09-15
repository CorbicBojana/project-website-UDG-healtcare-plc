// MENU
// Select DOM Items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    for (var y = 0; y < navItems.length; y++) {
      navItems[y].classList.add("show");
    }
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    for (var y = 0; y < navItems.length; y++) {
      navItems[y].classList.remove("show");
    }
    showMenu = false;
  }
}

// Close Open Menu on Click Link
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", navItemsClick);
}

function navItemsClick() {
  if (menu.classList.contains("show")) {
    menuBtn.click();
  }
}

// EQUAL-HEIGHT
(function() {
  equalHeight(false);
})();

window.onresize = function() {
  equalHeight(true);
};

function equalHeight(resize) {
  var elements = document.getElementsByClassName("boxx"),
    allHeights = [],
    i = 0;
  if (resize === true) {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = "auto";
    }
  }
  for (i = 0; i < elements.length; i++) {
    var elementHeight = elements[i].clientHeight;
    allHeights.push(elementHeight);
  }
  for (i = 0; i < elements.length; i++) {
    elements[i].style.height = Math.max.apply(Math, allHeights) + "px";
    // Optional: Add show class to prevent FOUC
    if (resize === false) {
      elements[i].className = elements[i].className + " show";
    }
  }
}
