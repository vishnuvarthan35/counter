import React from "react";
import { Link } from 'react-router-dom';
import HomePage from "./home";
import ContactPage from "./contact";


function Nav(){
   return(
      <>
        <HomePage/>
        <ContactPage/>
      </>
   );
}

export default Nav;