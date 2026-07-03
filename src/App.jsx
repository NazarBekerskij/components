import { Button } from './Button/Button'
import { Message } from './components/Message/Message'
import { Item } from './components/Item/Item'
import './App.css'

function App() {

  const handleClick  = () => {
    console.log("добрий день");
  }

  return (
    <>
      <Item name="Назар"/>
      <Message text="Hello World"/>
      <Button onClick={handleClick}/>
    </>
  )
 }

export default App
