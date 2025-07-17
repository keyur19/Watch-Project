import React, {useContext} from "react";
import { CartContext } from "./CartContext";


const CollectionCard = ({ key, image, title, rs, desc, alt }) => {
  const { addToCart } = useContext(CartContext);

  

  // additems into cart function that is use in onclick event
  const handleAddToCart = () => {
    const item = { key, image, title, rs, desc, alt };
    addToCart(item);
  };
    return(
        <div className="container">
        <div class="card" style={{ height:"520px", backgroundColor:"rgba(0, 0, 0, 0.900)"}}>
  <img
    className="card-img-top imagew1" src={image}
     alt = {alt} />
  <div className="card-body">
    <h4 style={{color:"darkcyan", fontFamily:"serif"}} className="card-title">{title}</h4>
    <h4 style={{color:"Highlight",fontFamily:"sans-serif"}} className="">₹ {rs}</h4>
    <p  style={{height:"140px", color:"gray", fontWeight:"bold"}} className="card-text">{desc}</p>
    {/* <a style={{color: "#63e6be", background:"aliceblue", fontWeight:"700", border:"3px solid cadetblue"}} href="#!" class="btn btn-primary"><i class="fa-solid fa-cart-shopping" style={{color: "#63e6be"}}></i> Add To Cart</a> */}
    <button
      
      onClick={handleAddToCart}
      className="btn btn-primary addtocart">
      <i className="fa-solid fa-cart-shopping" style={{ color: "#63e6be" }}></i> Add To Cart
      </button>
  </div>
 
</div>


</div>
    )
}

export default CollectionCard;