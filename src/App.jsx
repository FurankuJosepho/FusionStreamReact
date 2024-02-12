import { Route, Routes } from "react-router-dom"
//import Components
import Navigation from "../components/Navbar"
import Home from "../pages/Home"
import Series from "../pages/Series"
import Manga from "../pages/Manga"
import Manwha from "../pages/Manwha"
import Movies from "../pages/Movies"
import MangaContent from "../components/SingleContents/MangaContent"
import ManwhaContent from "../components/SingleContents/ManwhaContent"
import NotFound from "../pages/NF";
function App() {

  return (
    <>
     <Navigation />
    <Routes>
     <Route path="/" index element={<Home/>}/>
     <Route path="/series">
      <Route index element={<Series/>}/>
      <Route path=":title"/>
     </Route>
     <Route path="/manga">
      <Route index element={<Manga/>}/>
      <Route path=":title" element={<MangaContent/>}/>
     </Route>
     <Route path="/manwha">
      <Route index element={<Manwha/>}/>
      <Route path=":title" element={<ManwhaContent/>}/>
     </Route>
     <Route path="/movies">
      <Route index element={<Movies/>}/>
      <Route path=":title"/>
     </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
