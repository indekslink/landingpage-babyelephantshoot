const navbar = document.querySelector("nav.navbar");
const toTop = document.querySelector(".to-top");
window.onscroll = function () {
  const scroll = window.scrollY;
  if (scroll > 50) {
    navbar.classList.add("shadow-sm");
    toTop.classList.add("show");
  } else {
    navbar.classList.remove("shadow-sm");
    toTop.classList.remove("show");
  }

  activeMenu(scroll);
};

toTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const parentLightbox = document.querySelectorAll(
  "#gallery .card.parent-lightbox"
);
parentLightbox.forEach((pl) => {
  const id = pl.getAttribute("data-id");

  const lightbox = document.querySelector(`#${id}.lightbox`);
  const child = Array.from(lightbox.children);
  child.forEach((ch) => {
    ch.setAttribute("data-fancybox", `${id}`);
  });
});

const learnMore = document.querySelector(".learn-more");
const aboutUs = document.querySelector("#about-us");
learnMore.addEventListener("click", function () {
  const offTop = aboutUs.offsetTop - 80;
  scrollTop(offTop);
});

const menus = document.querySelectorAll(".navbar .nav-link");
const activeMenu = (scroll) => {
  menus.forEach((menu) => {
    menu.classList.remove("active");
    const href = menu.getAttribute("href");
    const section = document.querySelector(href);
    const offTop = section.offsetTop - 120;
    const height = offTop + (section.clientHeight + 100);
    if (scroll > offTop && scroll < height) {
      const id = `#${section.getAttribute("id")}`;
      if (id == href) {
        menu.classList.add("active");
      }
    }
  });
};

const scrollTop = (offset) => {
  window.scrollTo(0, offset);
};

menus.forEach((m) => {
  m.addEventListener("click", function (e) {
    e.preventDefault();
    const href = m.getAttribute("href");
    const section = document.querySelector(href);
    const offTop = section.offsetTop - 80;
    scrollTop(offTop);
  });
});
