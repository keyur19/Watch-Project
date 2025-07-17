import React from "react";
import logo from "./logo.jfif"

const fit = {
    // height:"270px",
    width:"300px",
}
const manage = {
    color:"#fff",
   
    fontSize:"20px",
    space:"2px"
}
const year = new Date().getFullYear();
function Footer(){
    return(
        <div style={{width:"100%"}} className="row bg-dark">
            <div style={manage} className="col-sm-6 "><br />
                <p className="d-flex justify-content-center align-items-center"><i class="fa-solid fa-pen-nib fa-xl"></i> All Rights Reserved</p> 
                <br />
                <div>
                <div className="d-flex justify-content-center"><span><i class="fa-brands fa-whatsapp fa-xl"> </i>  123 123 1234</span></div> <br /> 
                <div className="d-flex justify-content-center"><span><i class="fa-brands fa-instagram fa-xl"> </i>  Instagram</span></div> <br /> 
                <div className="d-flex justify-content-center"><span><i class="fa-solid fa-envelope fa-xl"> </i>  wrist@gmail.com</span></div> <br /> 
                <div className="d-flex justify-content-center"><span><i class="fa-solid fa-copyright fa-xl"> </i> Copyright {year}</span></div> <br />
                </div>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center">
                <img style={fit} src= {logo} alt="logo" />
            </div>
        </div>
    )
}
export default Footer;