//Нужно создать кнопку "Get cat fact",
//при клике на которую, будет выполняться
const facts = document.querySelector(".facts");
const length = document.querySelector(".length");
const getFacts = document.querySelector(".facts");

const getFact = async () => {
  try {
    let response = await fetch("https://catfact.ninja/fact", {
      method: "GET",
    });
    console.log(response);
    // В result может лежать как ошибка(например если status === 400), либо ожидаемые данные(status===200)
    const result = await response.json();
    console.log(result.results[0]);
    console.log("hi");
    const facts = result.results[0];
    // Явно проверям, что если response.ok === false(делать это нужно из-за специфики работы fetch),
    // то генерируем ошибку, и тогда вызывается блок catch
    if (!response.ok) {
      // Если status === 200-299, то response.ok === true
      // Если за пределами 200-299, то response.ok === false
      // Если статус ответа не в пределах 200-299, то считаем это ошибкой
      // и генерируем ее таким образом, чтобы отдать result блок catch
      throw Object.assign(new Error("Some Request Error"), {
        response: result,
      });
    }

    // Добавляем имя пользователя в тег h1
    facts.innerHTML = `${facts}`;
    length.innerHTML = `${length}`;
  } catch (error) {
    // Тут будут лежать данные об ошибке
    //console.log(error);
    console.log(error.response);
  }
};

getFacts.addEventListener("click", getFact);
