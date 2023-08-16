function animateOnScroll() {
    const elements = document.querySelectorAll('.animate_scroll');
  
    function checkInView() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
  
        // Проверяем, находится ли элемент в области видимости окна браузера
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }
  
    // Вызываем функцию проверки видимости элементов при прокрутке и загрузке страницы
    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
  }
  
  animateOnScroll();