function menuButton() {
  let menuButton = document.querySelector(".menu-button");
  let menuButtonTop = document.querySelector(".menu-button .top");
  let menuButtonCenter = document.querySelector(".menu-button .center");
  menuButton.addEventListener("click", () => {
    let mobileMenu = document.querySelector(".mobile-menu");
    if (!mobileMenu.classList.contains("active")) {
      mobileMenu.style.display = "block";
      mobileMenu.classList.add("active");
      menuButton.style.transform = "rotate(45deg)";
      menuButtonCenter.style.display = "none";
      menuButtonTop.style.transform = "rotate(-90deg) translateX(-28%)";
    } else {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("active");
      menuButton.style.transform = "unset";
      menuButtonCenter.style.display = "block";
      menuButtonTop.style.transform = "unset";
    }
  });
}

function onScroll() {
  let header = document.querySelector("#header");
  let about = document.querySelector("#about");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= about.scrollHeight - 400) {
      header.style.boxShadow = "0px 0px 20px 0px #08111f";
      header.style.background = "rgba(0, 0, 0, 0.1)";
      header.style.backdropFilter = "blur(5px)";
    } else {
      header.style.boxShadow = "unset";
      header.style.background = "unset";
      header.style.backdropFilter = "unset";
    }
  });
}

function tabs() {
  let switcherLis = document.querySelectorAll(".tabs li");
  let allProjects = document.querySelectorAll(".all");

  switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", filter);
  });

  function removeActive() {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }

  function filter() {
    allProjects.forEach((project) => {
      project.style.order = "unset";
      project.style.opacity = "0";
      project.style.position = "absolute";
      project.style.zIndex = "-500";
    });
    document.querySelectorAll(this.dataset.cat).forEach((project) => {
      project.style.zIndex = "unset";
      project.style.order = "-1";
      project.style.opacity = "1";
      project.style.position = "relative";
    });
  }
}

menuButton();
onScroll();
tabs();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ########################################################################################################

const serviceDescription = document.querySelectorAll(
  ".servicesContainerMobile .serviceDescription"
);
const serviceImages = document.querySelectorAll(
  ".servicesContainerMobile .serviceImage"
);
const serviceImagesImg = document.querySelectorAll(
  ".servicesContainerMobile .serviceImage img"
);
const serviceImagesRight = document.querySelectorAll(
  ".serviceRight .serviceImage"
);
const serviceImagesLeft = document.querySelectorAll(
  ".serviceLeft .serviceImage"
);

for (const image of serviceImagesRight) {
  image.addEventListener("mouseenter", () => {
    const description = document.querySelector(
      `.serviceDescription-${image.dataset.id}`
    );
    description.style.transform = "translate(40%, -50%)";
  });
}

for (const image of serviceImagesRight) {
  image.addEventListener("mouseleave", () => {
    const description = document.querySelector(
      `.serviceDescription-${image.dataset.id}`
    );
    description.style.transform = "translate(0, -50%)";
  });
}

for (const image of serviceImagesLeft) {
  image.addEventListener("mouseenter", () => {
    const description = document.querySelector(
      `.serviceDescription-${image.dataset.id}`
    );
    description.style.transform = "translate(-40%, -50%)";
  });
}

for (const image of serviceImagesLeft) {
  image.addEventListener("mouseleave", () => {
    const description = document.querySelector(
      `.serviceDescription-${image.dataset.id}`
    );
    description.style.transform = "translate(0, -50%)";
  });
}

for (const image of serviceImagesImg) {
  for (const description of serviceDescription) {
    description.style.top = `${image.clientHeight - 62}px`;
  }
}

for (const image of serviceImages) {
  for (const img of serviceImagesImg) {
    image.style.height = `${img.clientHeight}px`;
  }
}
