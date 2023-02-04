// Get the About link element
var aboutLink = document.querySelector("a[href='#about']");

// Get the hero section element
var heroSection = document.getElementById("hero");

// Attach a click event listener to the About link
aboutLink.addEventListener("click", function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the top offset of the hero section
  var heroSectionTop = heroSection.offsetTop;

  // Scroll the page to the hero section over 600ms
  window.scroll({
    top: heroSectionTop,
    left: 0,
    behavior: "smooth"
  });
});