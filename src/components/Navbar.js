import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (  
        <div className="nav-container">
            <ul>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/contribute"><span className="special-nav">Suggest a word</span></Link></li>
            </ul>
        </div>
    );
}
 
export default Navbar;