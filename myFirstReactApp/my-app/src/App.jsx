import './App.css';
import Button from './components/Button/Button';

function App() {

  const nameOfCard = "Zaporozhec";

  const cars = { car1: "Volvo", car2: "Audi", car3: "Lada" };

  return (
    <div className="App">
      <p>React works - app lesson 17</p>
      <div className='button-container'>
        <Button /><Button /><Button />
      </div>
      <div className='car-card'>{cars.car1}
      <img src="https://www.topgear.com/sites/default/files/2023/03/1%20Volvo%20XC90.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
