import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./home";
import Login from "./login";

function Main(){
   return(
     <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
     </Router>
   );

}
export default Main;