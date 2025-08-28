import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Info from "./pages/Info"
import Info2 from "./pages/info2"
import Info3 from "./pages/info3"
import Info4 from "./pages/info4"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/info" element={<Info />}/>
          <Route path="/info2" element={<Info2 />}/>
          <Route path="/info3" element={<Info3 />}/>
          <Route path="/info4" element={<Info4 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
