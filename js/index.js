const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const header = document.querySelector('header')

// changing header text color after user reaches about section
window.onscroll = function() {
  if (window.scrollY >= vh - 30) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

// adding smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});