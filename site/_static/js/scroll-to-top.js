const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
const rootElement = document.documentElement;

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

scrollToTopBtn.addEventListener('click', scrollToTop);
