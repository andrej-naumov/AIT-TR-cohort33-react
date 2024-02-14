// Функция, которая возвращает промис, завершающийся с ошибкой через указанное количество миллисекунд
function errorDelay(ms) {
    return new Promise((resolve, reject) => setTimeout(reject, ms, new Error(`Произошла ошибка после ${ms} мс`)));
  }
  
  // Функция, которая возвращает промис, который резолвится через указанное количество миллисекунд
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Создаем массив промисов с разными задержками и одним, который завершится с ошибкой
  const promises = [
    errorDelay(500), // Промис, который завершится с ошибкой через 500 миллисекунд
    delay(1000),     // Промис, который завершится успешно через 1000 миллисекунд
    delay(1500)      // Промис, который завершится успешно через 1500 миллисекунд
  ];
  
  // Используем Promise.race для определения первого промиса, который завершится (успешно или с ошибкой)
  Promise.race(promises)
    .then(result => console.log('Результат:', result))
    .catch(error => console.error('Ошибка:', error.message)); // Выведет ошибку от первого промиса, который завершился с ошибкой
  