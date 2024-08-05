// import React from "react";
// import { Link } from "react-router-dom";
// import '../assets/styles/Navbar.css';
// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/login">LOGIN</Link></li>
//                 <li><Link to="/register">REGISTER</Link></li>
//                 <li><Link to="/taxcal">TAX CALCULATOR</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={require('../assets/images/logo2.png')} alt="Logo" className="navbar-logo" />
                <span className="navbar-name">CalcMyTax</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/register">REGISTER</Link></li>
                <li><Link to="/taxcal">TAX CALCULATOR</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
