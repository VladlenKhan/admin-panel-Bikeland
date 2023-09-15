import { Bills, Employee, List, Login, Main, OrderStatus, Products } from "./pages"
import { Route , Routes } from "react-router-dom"
import Orders from "./pages/Orders/Orders"

function App() { 

  return (
    
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/' element={<Main/>}/> 
      <Route path='/bills' element={<Bills/>}/> 
      <Route path='/employee' element={<Employee/>}/> 
      <Route path='/orders' element={<Orders/>}/> 
      <Route path='/products' element={<Products/>}/> 
      <Route path='/list' element={<List/>}/> 
      <Route path='/status' element={<OrderStatus/>}/> 


    </Routes>

  
  )
}

export default App
