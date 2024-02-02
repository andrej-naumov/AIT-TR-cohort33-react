formatedPrint = (info, result) => {
  console.log(`\r\n ### -----------------------------\r\n -> ${info}`) ;
  console.log(result);
};
//
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
formatedPrint("Список машин", cars)

//
const task1 = ` Создайте на основе старого массива 
                новый массив объектов по образу: 
                    [
                        {brand: "BMW", isDiesel: true}, 
                        {brand: "Mercedes", isDiesel: false}...
                    ]
`;
const newCars = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));
formatedPrint(task1, newCars);

//
task2 = "Создайте новый массив, где оставьте только машины с дизельным двигателем.";
const dieselCars = cars.filter((car) => car.isDiesel);
formatedPrint(task2, dieselCars);

//
task3 = "Создайте новый массив, где оставьте только машины не с дизельным двигателем.";
const nonDieselCars = cars.filter((car) => !car.isDiesel);
formatedPrint(task3, nonDieselCars);

//
task4 = "Посчитайте общую стоимость всех машин не с дизельным двигателем.";
const totalNonDieselCarsPrice = nonDieselCars.reduce(
  (total, car) => total + car.price,
  0
);
formatedPrint(task4, totalNonDieselCarsPrice);

//
task5 = "Повысьте цену всех машин в массиве на 20%.";
const increasedPrices = cars.map(car => ({
    ...car,
    price: car.price * 1.20, // Увеличиваем цену на 20%    
}));
formatedPrint(task5, increasedPrices);

task6 = "Создайте новый массив, где все дизельные машины заменены на { brand: \"Tesla\", price: 25000, isDiesel: false }";
const replacedDieselCars = cars.map(car => {
    if (car.isDiesel) {
        return {
            brand: "Tesla",
            price: 25000,
            isDiesel: false,
        };
    }
    return car; // Возвращаем исходный объект, если это не дизельная машина
});
formatedPrint(task6, replacedDieselCars);