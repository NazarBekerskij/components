// import { Button } from './Button/Button'
// import { Message } from './components/Message/Message'
// import { Item } from './components/Item/Item'
import './App.css'
import { Item } from './components/Item/Item';
import { List } from './List/List';

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
    mileage: 28000,
    price: 29000,
  },
  {
    id: 2,
    brand: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",
    mileage: 65000,
    price: 48000,
  },
  {
    id: 3,
    brand: "Audi",
    model: "A4",
    year: 2018,
    color: "Gray",
    mileage: 92000,
    price: 23000,
  },
  {
    id: 4,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Red",
    mileage: 12000,
    price: 42000,
  },
  {
    id: 5,
    brand: "Honda",
    model: "Civic",
    year: 2017,
    color: "Blue",
    mileage: 110000,
    price: 17000,
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2021,
    color: "Silver",
    mileage: 38000,
    price: 45000,
  },
  {
    id: 7,
    brand: "Ford",
    model: "Focus",
    year: 2015,
    color: "White",
    mileage: 145000,
    price: 9000,
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Golf",
    year: 2019,
    color: "Green",
    mileage: 56000,
    price: 19500,
  },
  {
    id: 9,
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    color: "Black",
    mileage: 5000,
    price: 35000,
  },
  {
    id: 10,
    brand: "Nissan",
    model: "Qashqai",
    year: 2016,
    color: "Brown",
    mileage: 132000,
    price: 14000,
  },
];

function App() {

  const newCars = cars
    .filter((car) => car.year >= 2020)
    .sort((a, b) => a.brand.localeCompare(b.brand));
  // const handleClick  = () => {
  //   console.log("добрий день");
  // }

  return (
    <>
      {/* <Item name="Назар"/>
      <Message text="Hello World"/>
      <Button onClick={handleClick}/> */}



   <h1>Автомобілі</h1>
    <List data={newCars}/>


    </>
  )
 }

export default App
