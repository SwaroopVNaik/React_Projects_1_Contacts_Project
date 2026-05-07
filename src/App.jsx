import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

let App = () =>{

    return <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path = "/index" element = {<Home/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/services" element = {<Services/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
            </Routes>
        </Router>
    </div>

}

export default App;