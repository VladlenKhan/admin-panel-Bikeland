import { Bills, Employee, Login, Main } from "./pages"
import { Route , Routes } from "react-router-dom"

function App() { 

  return (
    
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/' element={<Main/>}/> 
      <Route path='/bills' element={<Bills/>}/> 
      <Route path='/employee' element={<Employee/>}/> 

    </Routes>

  
  )
}

export default App
