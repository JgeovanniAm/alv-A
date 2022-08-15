(function () {
  function generateShadow(lines, space) {
    let shadow = "";
    for (let i = 0; i <= lines; i++) {
      // shadow += ` ${(space += 7)}px 0px 1px white,`;
      if (i == lines) {
        // return (shadow += ` ${(space += 5)}px 1px 1px white`);
      }
    }
  }

  document
    .querySelectorAll(".shape-sq-bg.shape-shadow-bg")
    ?.forEach((element) => {
      element.style.setProperty("--box-shadow", generateShadow(90, 2));
    });

  // munu
  var btn = document.querySelectorAll(".nav-menu-btn"),
    menuitem = document.querySelectorAll("nav a");

  [...btn, ...menuitem].forEach((item) => {
    item.addEventListener("click", () => {
      // replace this code using data attribute in order to use css finite states 
      document.body.classList.toggle("disable-scroll");
      document.querySelector("nav").classList.toggle("active");
      document.querySelector(".tri").classList.toggle("active");
      document.querySelector(".nav-menu-btn").classList.toggle("active");
      document.querySelector(".tri--invert").classList.toggle("active");
    });
  });
})();
