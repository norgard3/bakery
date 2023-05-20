import React from "react";
// import Header from '../Header';
import logo from '../../images/2023mainimage.png';





function Main() {
  return (
<div id="/">
      <div className= "container row align-items-center">
        <div className="row w-50  d-inline-flex align-items-center">
          <div className="col  text-center d-inline-block flex-direction-center position-relative">
            <h2 className="main-h2">Welcome!</h2>
            <h3 className="px-5">So glad you're here! I offer custom cookies and cakes for many occassions.</h3>
            <a href="./About/About"> <button type="button" className="btn btn-outline-dark main-btn">Read More</button></a>
          </div>
        </div>
        <div className="col w-50 h-50 d-inline-flex right-image">
        <img alt="logo"src={logo} className="d-inline-block align-top flower" width="700" height="100"/>
          
        </div>
      </div>
</div>

      
  );
}

 


export default Main;