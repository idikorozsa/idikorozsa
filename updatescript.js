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