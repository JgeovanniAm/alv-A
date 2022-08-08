(function () {
  function generateShadow(lines, space) {
    let shadow = "";
    for (let i = 0; i <= lines; i++) {
      shadow += ` ${(space += 7)}px 0px 1px white,`;
      if (i == lines) {
        return (shadow += ` ${(space += 5)}px 1px 1px white`);
      }
    }
  }

  document
    .querySelectorAll(".shape-sq-bg.shape-shadow-bg")
    ?.forEach((element) => {
      element.style.setProperty("--box-shadow", generateShadow(90, 2));
    });

  // munu
  document
    .querySelector(".nav-menu-btn")
    ?.addEventListener("click", function () {
      document.querySelector(".tri").classList.toggle("active");
      document.querySelector(".tri--invert").classList.toggle("active");
    });
})();
