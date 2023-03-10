import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return(
        <div>
            <Link to="/"><h1>National Parks List</h1></Link>
        </div>
    )
};

export default Header;