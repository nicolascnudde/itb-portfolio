(()=> {
  const app = {
    init() {
      this.cacheElements;
      this.registerListeners;
    },

    cacheElements() {
      this.btnToTopElement = document.querySelector('.btn-to-top');
    },

    registerListeners() {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },

  }
  app.init();
})();
