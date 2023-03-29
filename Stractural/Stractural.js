document.addEventListener('DOMContentLoaded', function() {
    // Your code that uses the swiper variable goes here
    const swiper = new Swiper('.carousel', {
      // Options for the swiper instance
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
    });
  });
  
    
