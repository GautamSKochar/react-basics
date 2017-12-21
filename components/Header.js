import React from "react";
import {Link} from 'react-router-dom';

export const Header = (props) => {
    return (
        <div className="page-header" style={{backgroundColor:'lightgrey'}}>
            <h1 style={{textAlign:'center'}}>React POC Demo</h1>
            <nav className="navbar navbar-default navbar-fixed-top">
                {/* <div className="container"> */}
                {/* <div className="navbar-header"> */}
                            <ul className="header">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/user/4">User</Link></li>                                
                            </ul>
                        {/* </div> */}
                {/* </div> */}
            </nav>
        </div>


    );

}