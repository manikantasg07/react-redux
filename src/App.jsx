import './App.css'
import {Icecreamview} from "./app/features/icecream/Icecreamview"
import {Cakeview} from "./app/features/cake/Cakeview"
import Userview from "./app/features/users/Userview";
import { useSelector } from 'react-redux';


function App() {
  return (
    <>
      <Cakeview />
      <Icecreamview />
      <Userview />
    </>
  )
}

export default App
