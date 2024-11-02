document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".mob-nav");e.addEventListener("click",(function(){e.classList.toggle("is-active"),t.classList.contains("is-active")?(t.classList.remove("is-active"),setTimeout((()=>{t.style.display="none"}),400)):(t.style.display="flex",setTimeout((()=>{t.classList.add("is-active")}),10)),e.classList.contains("is-active")?document.body.style.overflow="hidden":document.body.style.overflow="auto"})),window.addEventListener("resize",(()=>{window.innerWidth>950&&t.classList.contains("is-active")&&(t.classList.remove("is-active"),t.style.display="none",e.classList.remove("is-active"),document.body.style.overflow="auto")}))}));const body=document.body;let lastScroll=0;function updateElementsOnScroll(){const e=document.querySelectorAll(".scroll-element"),t=window.innerHeight,s=t/2;e.forEach((e=>{const n=e.getBoundingClientRect(),o=n.top+n.height/2;let i,l;if(o<=s)i=1,l=1;else if(n.top<t&&n.bottom>0){const e=Math.abs(s-o),n=t/2,c=Math.min(1,1-e/n);i=.8+.2*c,l=.5+.5*c}else i=.8,l=.5;e.style.transform=`scale(${i})`,e.style.opacity=l}))}window.addEventListener("scroll",(()=>{})),document.addEventListener("DOMContentLoaded",updateElementsOnScroll),document.addEventListener("scroll",updateElementsOnScroll);
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.scroll-up');
    const observerOptions = {root: null,rootMargin: '0px',threshold: 0};
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {entry.target.classList.add('show-up');observer.unobserve(entry.target);}
      });
    }, observerOptions);
    elements.forEach(element => {observer.observe(element);});
  });
function handleScroll() {
  const header = document.getElementById("headerWrapperHome");
  const content = document.getElementById("mainContent");
  const headerHeight = header.offsetHeight;
  const scrollThreshold = 100;

  if (window.innerWidth <= 950) {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("fixed");
      content.style.paddingTop = `${headerHeight}px`;
    } else {
      header.classList.remove("fixed");
      content.style.paddingTop = "0px";
    }
  } else {
    header.classList.remove("fixed");
    content.style.paddingTop = "0px";
  }
}

document.addEventListener("scroll", handleScroll);
  