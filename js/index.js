const header = document.querySelector('header')
const menuOpenBtn = document.querySelector('.navigation__btn')
const menuCloseBtn = document.querySelector('.navigation__close')
const navigationList = document.querySelector('.navigation__list')
const headerTitle = document.querySelector('.header__title')
const navigationLinks = document.querySelectorAll('.navigation__link')
const prev  = document.querySelector('.about__skills-prev');
const next = document.querySelector('.about__skills-next');
const skills = document.querySelector('.about__skills')

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// navigation menu toggle
const showMenu = () => {
  navigationList.classList.add('active')
  headerTitle.classList.add('black')
}

const hideMenu = () => {
  navigationList.classList.remove('active')
  headerTitle.classList.remove('black')
}

menuOpenBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)
headerTitle.addEventListener('click', hideMenu)
navigationLinks.forEach(navLink => navLink.addEventListener('click', hideMenu))

// changing header text color after user reaches about section
window.onscroll = function() {
  if (window.scrollY >= vh - 30) {
    header.classList.add('active');
    menuOpenBtn.classList.add('black');
  } else {
    header.classList.remove('active');
    menuOpenBtn.classList.remove('black');
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