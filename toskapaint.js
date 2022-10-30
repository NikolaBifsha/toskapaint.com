const header = document.querySelector("header");
const logo = document.getElementById("myLogoId");
const contact = document.getElementById("headerContact");
let width = window.innerWidth;
let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0.0) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0.0) {
    logo.classList.add("logo-blue");
  } else {
    logo.classList.remove("logo-blue");
  }
});

if (width > 1000 && window.scrollY <= 0.0) {
  document.getElementById("myLogoId").src =
    "/toska-paints/pics/Toska_White-min.png";
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0.0) {
      document.getElementById("myLogoId").src =
        "/toska-paints/pics/Toska_Colour-min.png";
    } else {
      document.getElementById("myLogoId").src =
        "/toska-paints/pics/Toska_White-min.png";
    }
  });
} else if (width > 1000 && window.scrollY > 0.0) {
  document.getElementById("myLogoId").src =
    "/toska-paints/pics/Toska_Colour-min.png";
  window.addEventListener("scroll", () => {
    if (window.scrollY == 0.0) {
      document.getElementById("myLogoId").src =
        "/toska-paints/pics/Toska_White-min.png";
    } else {
      document.getElementById("myLogoId").src =
        "/toska-paints/pics/Toska_Colour-min.png";
    }
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0.0) {
    contact.classList.add("changed-contact-header");
  } else {
    contact.classList.remove("changed-contact-header");
  }
});

function redirection() {
  window.location.href = "#contact";
}

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
