function colorToRgb(color) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, _] = ctx.getImageData(0, 0, 1, 1).data;
    return [r, g, b];
  }
  
  function changeColor(color) {
    return new Promise(resolve => {
      let currentColor = getComputedStyle(square).backgroundColor || 'red';
      console.log("Current color:", currentColor); // Отладочное сообщение
      let colorSteps = 100; // Количество шагов для плавного изменения цвета
      const stepDelay = 20; // Задержка между шагами изменения цвета (в миллисекундах)
      
      // Проверяем формат цвета и парсим его, если это необходимо
      let currentColorValues;
      if (currentColor.startsWith("rgb")) {
        currentColorValues = currentColor.match(/\d+/g).map(Number);
      } else {
        currentColorValues = colorToRgb(currentColor);
      }
  
      // Получаем числовые значения R, G и B для целевого цвета
      const targetColorValues = color.startsWith("rgb") ? color.match(/\d+/g).map(Number) : colorToRgb(color);
  
      // Вычисляем шаг изменения для каждой компоненты цвета
      const stepR = (targetColorValues[0] - currentColorValues[0]) / colorSteps;
      const stepG = (targetColorValues[1] - currentColorValues[1]) / colorSteps;
      const stepB = (targetColorValues[2] - currentColorValues[2]) / colorSteps;
  
      function nextStep() {
        // Вычисляем новые значения R, G и B для следующего шага
        const newR = currentColorValues[0] + stepR;
        const newG = currentColorValues[1] + stepG;
        const newB = currentColorValues[2] + stepB;
        
        // Устанавливаем новый цвет квадрата
        square.style.backgroundColor = `rgb(${newR},${newG},${newB})`;
        
        // Обновляем текущий цвет для следующего шага
        currentColorValues[0] = newR;
        currentColorValues[1] = newG;
        currentColorValues[2] = newB;
  
        colorSteps--;
  
        if (colorSteps > 0) {
          setTimeout(nextStep, stepDelay);
        } else {
          resolve();
        }
      }
  
      nextStep();
    });
  }
  
  const square = document.getElementById('square');
  
  square.addEventListener('click', function() {
    // Генерация случайных координат для квадрата
    const newX = Math.floor(Math.random() * (window.innerWidth - 100));
    const newY = Math.floor(Math.random() * (window.innerHeight - 100));
    square.style.left = newX + 'px';
    square.style.top = newY + 'px';
  
    // Вызываем функцию changeColor для начала изменения цвета
    changeColor('green').then(() => {
      return changeColor('red');
    });
  });
  