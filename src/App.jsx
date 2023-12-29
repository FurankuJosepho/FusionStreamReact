import { Route, Routes } from "react-router-dom"
//import Components
import Navigation from "../components/Navbar"
import Home from "../pages/Home"
import Series from "../pages/Series"
function App() {

  return (
    <>
     <Navigation />
    <Routes>
     <Route path="/" index element={<Home/>}/>
     <Route path="/series" element={<Series/>}/>
    </Routes>
    </>
  )
}

export default App
