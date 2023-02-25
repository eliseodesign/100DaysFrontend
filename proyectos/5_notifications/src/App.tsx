import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from "./views/list"
import Details from "./views/details"
import { useNoti } from "./utils/store/useNoti"

function App() {

  const { notifications } = useNoti()
  const count = notifications.filter( noti => noti.opened === false).length
  
  return (
    <div className="App">
      <div className="head">
        <h1>Notifications</h1> <span>{count}</span>
      </div>

   
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
