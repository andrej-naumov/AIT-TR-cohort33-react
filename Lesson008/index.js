const names = ["Семен", "Иван", "Петр", "Татьяна"]; // имена
const ages = [18, 27, 74, 34]; // возраст

const names_ages = []; // новый массив
const names_ages_revers = []; // новый реверсивный массив

// проверка есть ли данные в массивах
if (names.length === 0 || ages.length === 0) {
  console.log(
    `Ошибка - массив${
      names.length === 0 && ages.length === 0
        ? "ы имён и возраста пустые"
        : names.length === 0
        ? " имён пустой"
        : " возраста пустой"
    }`
  );
  return; //~ выход из программы
}

// проверка, одинаковы ли массивы по длине
if (names.length !== ages.length) {
  console.log(
    `Ошибка - массивы имеют разную длину - массив имён имеет длину ${names.length}, а массив возраста имеет длину ${ages.length}`
  );
  return; //~ выход из программы
}

let index = 0;
let index_revers = names.length - 1;

while (index_revers >= 0) {
  names_ages.push(`${names[index]} ${ages[index]} лет/годов`);
  names_ages_revers.push(`${names[index_revers]} ${ages[index_revers]} лет/годов`);
  index++;
  index_revers--;
}

console.log("Массив в обычной последовательности:", names_ages);
console.log("Массив в обратной последовательности:", names_ages_revers);
