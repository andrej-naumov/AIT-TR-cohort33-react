// Функция, возвращающая промис с задержкой
function showNumbers(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, seconds * 1000);
    });
  }
  
  // Создание нескольких промисов с разными значениями секунд
  const promises = [
    showNumbers(2),
    showNumbers(5),
    showNumbers(3)
  ];
  
  // Обработка результатов выполнения каждого промиса
  Promise.all(promises)
    .then(results => {
      results.forEach(result => {
        console.log(result);
      });
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  