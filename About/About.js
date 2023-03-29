const sections = document.querySelectorAll('[data-scroll]');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
    
      sections.forEach(section => {
        const sectionPosition = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionAnimation = section.getAttribute('data-scroll');
        const sectionSpeed = section.getAttribute('data-scroll-speed');
    
        if (scrollPosition >= sectionPosition - window.innerHeight && scrollPosition < sectionPosition + sectionHeight) {
          section.style.animation = `${sectionAnimation} ${sectionSpeed}s ease-in-out forwards`;
        } else {
          section.style.animation = '';
        }
      });
    }); 