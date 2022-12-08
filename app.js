const navSlide = () => {
  const button = document.querySelector(".button");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  button.addEventListener('click', () => {
    // toggle nav
        nav.classList.toggle("nav-active");

        //Animate links
        navLinks.forEach((link, index) => {
          if (link.getElementsByClassName.animation) {
            link.getElementsByClassName.animation = "";
           } else {
            link.style.animation = 'navLinkFade 1s ease-in forwards ${index / 7 + 1}s';
          }
        });

        //Button animation
        button.classList.toggle('toggle');
  });
};

navSlide();
