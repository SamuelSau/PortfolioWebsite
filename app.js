// Get the About link element
let aboutLink = document.querySelector("a[href='#about']");
// Get the hero section element
let heroSection = document.getElementById("hero");

// Attach a click event listener to the About link
aboutLink.addEventListener("click", function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the top offset of the hero section
  let heroSectionTop = heroSection.offsetTop;

  // Scroll the page to the hero section over 600ms
  window.scroll({
    top: heroSectionTop,
    left: 0,
    behavior: "smooth"
  });
});

//do same thing with skill section
let skillLink = document.querySelector("a[href='#skills']");
let skillSection = document.getElementById("skill");
skillLink.addEventListener("click", function(event) {
  event.preventDefault();
  let skillSectionTop = skillSection.offsetTop;
  window.scroll({
    top: skillSectionTop,
    left: 0,
    behavior: "smooth"
  });
});

//do same thing with project section
let projectLink = document.querySelector("a[href='#projects']");
let projectSection = document.getElementById("project");
projectLink.addEventListener("click", function(event) {
  event.preventDefault();
  let projectSectionTop = projectSection.offsetTop;
  window.scroll({
    top: projectSectionTop,
    left: 0,
    behavior: "smooth"
  });
});
