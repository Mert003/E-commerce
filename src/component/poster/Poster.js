import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import poster from "../../asset/poster.jpg";
import "./poster.css"
 
const Poster = () =>{
    return(
        <div className="posterContainer">            
            <img src={poster} />
            <h4>Start Now </h4>
        </div>
    )
}
export default Poster;