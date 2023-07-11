import AuthPage from "./components/AuthPage";
import FrontPage from "./components/FrontPage"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

    <Navbar/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/sign-in" element={<AuthPage/>} />


      </Routes>
    </BrowserRouter>


   

     
    </>
  )
}

export default App
