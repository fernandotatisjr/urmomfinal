document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobNav = document.querySelector('.mob-nav');
  const mobileBreakpoint = 950;

  const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
          if (mobNav.classList.contains('is-active')) {
              mobNav.classList.remove('is-active');
              mobNav.style.display = 'none';
              hamburgerBtn.classList.remove('is-active');
              document.body.style.overflow = 'auto';
          }
      }
  };

  hamburgerBtn.addEventListener('click', function () {
      hamburgerBtn.classList.toggle('is-active');
      if (mobNav.classList.contains('is-active')) {
          mobNav.classList.remove('is-active');
          setTimeout(() => {
              mobNav.style.display = 'none';
          }, 400);
      } else {
          mobNav.style.display = 'flex';
          setTimeout(() => {
              mobNav.classList.add('is-active');
          }, 10);
      }
      if (hamburgerBtn.classList.contains('is-active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  });

  window.addEventListener('resize', handleResize);
});
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () =>{
})
function updateElementsOnScroll() {
    const scrollElements = document.querySelectorAll('.scroll-element');
    const windowHeight = window.innerHeight;
    const viewportCenter = windowHeight / 2;
  
    scrollElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const elementCenter = elementPosition.top + (elementPosition.height / 2);
      let scaleValue, opacityValue;
  
      if (elementCenter <= viewportCenter) {
        scaleValue = 1;
        opacityValue = 1;
      } else if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        const maxDistance = windowHeight / 2;
        const ratio = Math.min(1, 1 - (distanceFromCenter / maxDistance));
        scaleValue = 0.8 + (0.2 * ratio);
        opacityValue = 0.5 + (0.5 * ratio);
      } else {
        scaleValue = 0.8;
        opacityValue = 0.5;
      }
  
      element.style.transform = `scale(${scaleValue})`;
      element.style.opacity = opacityValue;
    });
  }
  document.addEventListener('DOMContentLoaded', updateElementsOnScroll);
  document.addEventListener('scroll', updateElementsOnScroll);
  
