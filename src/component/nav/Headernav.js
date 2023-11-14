import React from "react";
import './headernav.css';
import logo from '../../asset/logo-s.png';
export default function Headernav(){
    return(
        <nav>
            <div className="leftbar">  
            <ul>
                <li><img src={logo} /></li>
                <li>Slob Flowers</li>
            </ul>    
            </div>


            <div className="rightbar">
                <ul>                   
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>             

            </div>

        </nav>
        
    )
}