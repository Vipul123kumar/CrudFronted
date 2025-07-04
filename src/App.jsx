import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}> </Route>
      <Route path='/create' element={<CreateUser/>}> </Route>
      <Route path='/update/:id' element={<UpdateUser/>}> </Route>
    </Routes>
  </BrowserRouter> 
   </div>
  )
}

export default App
