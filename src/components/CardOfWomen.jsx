import React, {useContext} from "react";
import { CartContext } from "./CartContext";

const CardOfWomen = ({ key, image, title, rs, desc, alt }) => {
  const { addToCart } = useContext(CartContext);

  

  // additems into cart function that is use in onclick event
  const handleAddToCart = () => {
    const item = { key, image, title, rs, desc, alt };
    addToCart(item);
  };
    return(
        <div className="container">
        <div class="card" style={{ height:"500px"}}>
  <img
   
    className="card-img-top imagew1" src={image}
     alt = {alt} />
  <div className="card-body">
    <h4 style={{color:"hotpink", fontFamily:"serif",fontWeight:"700"}} className="card-title">{title}</h4>
    <h4 style={{color:"Highlight",fontFamily:"sans-serif"}} className="">₹ {rs}</h4>
    <p  style={{height:"130px", color:"gray", fontWeight:"600"}} className="card-text">{desc}</p>
    {/* <a style={{color: "hotpink", background:"rgb(251, 230, 255)", fontWeight:"700", border:"3px solid pink"}} href="#!" class="btn btn-primary"><i class="fa-solid fa-cart-shopping" style={{color: "hotpink"}}></i> Add To Cart</a> */}
    <button
      onClick={handleAddToCart}
      className="btn btn-primary addto">
      <i className="fa-solid fa-cart-shopping" style={{ color: "hotpink" }}></i> Add To Cart
      </button>
  </div>
 
</div>


</div>

    )
}
export default CardOfWomen;
    