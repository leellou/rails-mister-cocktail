const visibleNavbarOnScroll = () => {
  const navbar = document.querySelector('.top-navbar');
  if(navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        navbar.classList.remove('hidden')
      } else {
        navbar.classList.add('hidden')
      }
    });
  };
};

export { visibleNavbarOnScroll };
