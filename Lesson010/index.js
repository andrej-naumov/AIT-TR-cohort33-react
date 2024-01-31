// index.js

// Стрелочная функция, принимающая массив и индекс
const getElementByIndex = (array, index) => {
    // Проверка наличия индекса в пределах массива
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return "Индекс находится за пределами массива";
    }
};

// Пример использования функции
const myArray = [10, 20, 30, 40, 50];
console.log(getElementByIndex(myArray, 2)); // Выведет: 30
console.log(getElementByIndex(myArray, 200)); // Выведет: 30

console.log("-------------------------------")

// Функция, принимающая два массива и возвращающая новый массив из всех их элементов
const mergeArrays = (array1, array2) => {
    return [...array1, ...array2];
};

// Пример использования функции
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1);
console.log(array2);
console.log(mergeArrays(array1, array2)); // Выведет: [1, 2, 3, 4, 5, 6]

console.log("-------------------------------")
// index.js

// Функция, расшифровывающая код погоды
const decodeWeather = (weatherCode) => {
    // Объект с соответствиями кодов погоды и их описаний
    const weatherDescriptions = {
        "SQ": "шквал",
        "PO": "пыльный вихрь",
        "FC": "торнадо",
        "BR": "дымка (видимость от 1 до 9 км)",
        "HZ": "мгла (видимость менее 10 км)",
        "FU": "дым (видимость менее 10 км)",
        "DS": "пыльная буря (видимость менее 10 км)",
        "SS": "песчаная буря (видимость менее 10 км)"
    };

    // Проверка наличия кода погоды в объекте
    if (weatherCode in weatherDescriptions) {
        return weatherDescriptions[weatherCode];
    } else {
        return "Неизвестный код погоды";
    }
};

// Пример использования функции
console.log(decodeWeather("BR")); // Выведет: дымка (видимость от 1 до 9 км)
