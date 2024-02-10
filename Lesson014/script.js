document.getElementById('randomVehicleBtn').addEventListener('click', getRandomVehicle);

async function getRandomVehicle() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const randomVehicleBtn = document.getElementById('randomVehicleBtn');

  loadingSpinner.style.display = 'block'; // Включаем спиннер перед началом загрузки данных
  randomVehicleBtn.disabled = true; // Делаем кнопку неактивной во время загрузки данных

  try {
    const response = await fetch('https://api.thriving-coders.com/vehicles');
    const vehicles = await response.json();
    const randomIndex = Math.floor(Math.random() * vehicles.length);
    const randomVehicle = vehicles[randomIndex];
    
    displayVehicle(randomVehicle);
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
  } finally {
    loadingSpinner.style.display = 'none'; // Выключаем спиннер после завершения загрузки данных
    randomVehicleBtn.disabled = false; // Включаем кнопку обратно после завершения загрузки данных или ошибки
  }
}


function displayVehicle(vehicle) {
    const vehicleDetails = document.getElementById('vehicleDetails');
    vehicleDetails.innerHTML = `
      <h2>${vehicle.model}</h2>
      <p>Weight Capacity: ${vehicle.weightCapacity} kg</p>
      <p>Fuel Type: ${vehicle.fuelType}</p>
      <p>Range With Cargo: ${vehicle.rangeWithCargo} km</p>
      <p>Range Without Cargo: ${vehicle.rangeWithOutCargo} km</p>
      <p>Fuel Consumption With Cargo: ${vehicle.fuelConsumptionWithCargo} liters/100 km</p>
      <p>Useful Area: ${vehicle.usefulArea} square meters</p>
      <p>Cost of Delivery: $${vehicle.costOfDelivery}</p>
    `;
  }