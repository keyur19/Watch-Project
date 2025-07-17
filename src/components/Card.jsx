import React from "react";

function Card(props){
    return(  
      <>
  
  <div className="card d-flex justify-content-center align-items-center" style={{background:"rgb(243, 243, 244)", border:"none",height:"200px"}}>
    <img className="card-img-top" src={props.src}alt="Card image" style={{width:"80%", height:"150px",backgroundSize: "cover"}} />
    <div className="card-body">
      <h4 style={{color:"black", fontWeight:"bolder", fontFamily:"initial"}} className="card-title">{props.h4}</h4>
    </div>
  </div>
  <br></br>
  </>
    )
}
export default Card;