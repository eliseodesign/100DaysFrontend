import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from "./views/list"
import Details from "./views/details"

function App() {
  
  return (
    <div className="App">
     <h1>Noitifications</h1>

   
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<List/>}/>
          <Route path="/details/:id" element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
