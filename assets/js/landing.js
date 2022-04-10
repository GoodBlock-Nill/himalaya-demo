/**
 * navigation header scroll event
 */ 
document.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  // let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let scrollY = window.scrollY;
  let targetY = nav.getBoundingClientRect().height;

  if (scrollY > targetY) {
    nav.classList.remove('bg-none');
  } else {
    nav.classList.add('bg-none');
  }
});