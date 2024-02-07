function animateBoxes() {
    const container = document.getElementById('container');
    const boxes = document.querySelectorAll('.box');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const boxWidth = boxes[0].offsetWidth;
    const boxHeight = boxes[0].offsetHeight;
    const animationDuration = 1000; // Длительность анимации (ms)
    const delayBetweenBoxes = 500; // Задержка между появлением цифр (ms)
  
    boxes.forEach((box, index) => {
      box.style.position = 'absolute';
      box.style.transition = `all ${animationDuration / 1000}s ease ${index * delayBetweenBoxes}ms`;
      switch(index % 4) {
        case 0: // сверху
          box.style.top = `${-boxHeight}px`;
          box.style.left = `${(containerWidth - boxWidth) / 2}px`;
          break;
        case 1: // справа
          box.style.top = `${(containerHeight - boxHeight) / 2}px`;
          box.style.left = `${containerWidth}px`;
          break;
        case 2: // снизу
          box.style.top = `${containerHeight}px`;
          box.style.left = `${(containerWidth - boxWidth) / 2}px`;
          break;
        case 3: // слева
          box.style.top = `${(containerHeight - boxHeight) / 2}px`;
          box.style.left = `${-boxWidth}px`;
          break;
      }
    });
  
    // Последовательное появление цифр
    setTimeout(() => {
      boxes.forEach((box, index) => {
        box.style.top = `${(containerHeight - boxHeight) / 2}px`;
        box.style.left = `${(containerWidth - boxWidth * 5) / 2 + index * boxWidth}px`;
      });
    }, 100);
  }
  
  animateBoxes();
  