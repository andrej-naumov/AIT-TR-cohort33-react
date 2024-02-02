const users = [
  { name: "Анна", age: 25 },
  { name: "Иван", age: 30 },
  { name: "Елена", age: 20 },
  { name: "Петр", age: 35 },
  { name: "Мария", age: 28 }
];

// Пример использования функции find для поиска пользователя по имени и возрасту
const foundUser = users.find(user => user.name === "Иван" && user.age === 30);

if (foundUser) {
  console.log("Найден пользователь:", foundUser);
} else {
  console.log("Пользователь не найден.");
}



 users = [
    { name: "Brat", age: 20 },
    { name: "Peter", age: 30 },
    { name: "Mike", age: 40 },
    { name: "John", age: 50 },
    { name: "Brat", age: 40 },];
const user = users.find((value) => {
    return value.name === "Brat" && value.age === 20;});
console.log(user);
