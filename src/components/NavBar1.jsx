import React from "react";
import logo from "./logo.jfif"

const logoDesign = {
    height:"150px",
    width:"160px",
}
const back = {
    backgroundColor:"#284b63",
}
const no = {
    textDecoration:"none",
    color:"#ffebe7",
    fontSize:"25px",
    fontFamily: "sans-sarif",
    fontWeight:"800",
}
function NavBar1(){
    return(
        <nav style={back} className="navbar">
                <div className="container-fluid">
                    {/* one nav element first nav */}
                    <a style={no} href="/"><img style={logoDesign} src={logo}  alt="logo"/>  Wrist Wonders</a>
                </div>
            </nav>
    )
}
export default NavBar1;