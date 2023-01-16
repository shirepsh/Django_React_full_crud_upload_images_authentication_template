import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = ()=> {
  return (
           <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/Product">your products</Link></li>
            <li><Link to="/AllProducts">AllProducts</Link></li>
            <li style={{backgroundColor:"green", float:"right"}}><Link to="/Login">login/register</Link></li>
          </ul>
        </div>)}
export default Navbar
