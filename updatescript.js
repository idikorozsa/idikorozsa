const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Simple fade-in animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const hiddenElements = document.querySelectorAll(
  '.service-card, .testimonial-card, .about-content, .about-image'
);

hiddenElements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});


const modal =
  document.getElementById("service-modal");

const modalTitle =
  document.getElementById("modal-title");

const modalDescription =
  document.getElementById("modal-description");

const modalDetails =
  document.getElementById("modal-details");

const openButtons =
  document.querySelectorAll(".open-modal");

const closeButton =
  document.querySelector(".close-modal");

const overlay =
  document.querySelector(".modal-overlay");

openButtons.forEach(button => {

  button.addEventListener("click", () => {

    modalTitle.textContent =
      button.dataset.title;

    modalDescription.textContent =
      button.dataset.description;

    modalDetails.innerHTML =
      button.dataset.details;

    modal.classList.add("active");

  });

});

function closeModal() {

  modal.classList.remove("active");

}

closeButton.addEventListener(
  "click",
  closeModal
);

overlay.addEventListener(
  "click",
  closeModal
);


const scrollButtons =
  document.querySelectorAll(".close-and-scroll");

scrollButtons.forEach(button => {

  button.addEventListener("click", (e) => {

    e.preventDefault();

    const modal =
      button.closest(".modal");

    modal.classList.remove("active");

    const target =
      document.querySelector("#contact");

    setTimeout(() => {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }, 300);

  });

});
document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    modal.classList.remove("active");
  }
});
