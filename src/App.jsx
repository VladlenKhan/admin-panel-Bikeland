import { Login, Main } from "./pages"
import { Route , Routes } from "react-router-dom"

function App() { 

  return (
    
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/' element={<Main/>}/> 

    </Routes>

  
  )
}

export default App
