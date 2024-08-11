document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".text", {
    strings: ["Frontend Developer !", "Coder !", "Web Developer !"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const paths = document.querySelectorAll(".path");

  paths.forEach((path) => {
    const percentage = path.getAttribute("data-percentage");
    if (percentage) {
      path.style.setProperty(
        "--stroke-dashoffset",
        `calc(502 * (1 - ${percentage / 100}))`
      );
    }
  });
});
