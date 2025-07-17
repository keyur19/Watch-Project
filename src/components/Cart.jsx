import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BuyButton from "./BuyButton";
import { useNavigate } from "react-router-dom";

function Cart(){
//  const {cartItems} = useContext(CartContext);
const { cartItems, removeFromCart } = useContext(CartContext);

    // const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();



        // Calculate total price
        const totalPrice = cartItems.reduce((total, item) => {
            // Remove commas and convert to number
            const cleanPrice = item.rs.replace(/,/g, '');
            const price = parseFloat(cleanPrice);
            return total + price;
        }, 0);

        // Calculate discounted price
    const discount = 0.10;
    const discountedPrice = (totalPrice * (1 - discount)).toFixed(2);

    const handleBuyAll = () => {
        // Navigate to checkout or perform another action
        navigate('/checkout');
    };
   

// make one state
    // const [showBuyCardIndex, setShowBuyCardIndex] = useState(null);
// set index easily if button click then get their index
    const handleBuyButton = (item) => {
        navigate(`/buy/${item.key}`,{state: item});
    }

//    function for delete item

const handleRemoveButton = (item) => {
    removeFromCart(item);
};
    
    const carttext = {
        color:"darkcyan",
        fontSize:"30px",
    }

    const cartpara = {
        color:"gray",
        fontSize:"20px",
        fontFamily:"monospace",
        fontWeight:"500"
    }
    const head = {
        color:"#74c0fc",
        backgroundColor:"black"        
    }
    return(
        <>
        <div className="container">
            {/* <h2>Cart</h2> */}
            <h3 style={head} className="container d-flex justify-content-center">Cart</h3>
        <br /><br />

            {/* ternary */}
            {cartItems.length === 0 ? (<p className="d-flex justify-content-center" style={{fontSize:"40px", fontFamily:"monospace", color:"GrayText", backgroundColor:"rgba(128, 128, 128, 0.190)"}}>Your Cart Is Empty</p>) : (
                <ol>
                    {cartItems.map((item, index) => (
                        <li style={{textDecoration:"none"}} key={index}>
 {/* style={{ width: '50%', height:"300px" }} */}
                            <div className="row container">
                                <div className="container col-sm-6">
                               
                            <img src={item.image} alt = {item.alt} style={{height:"300px", width:"80%"}} /></div>
                            <div className="col-sm-6">
                            <span style={carttext}>{item.title}</span>
                            <br />
                            <span style={{color:"Highlight", fontFamily:"cursiv", fontSize:"25px"}}>- ₹ {item.rs}</span>
                            <p style={cartpara}>{item.desc}</p>
                            <button
      style={{ color: "#63e6be", background: "aliceblue", fontWeight: "700", border: "3px solid cadetblue" }}
        // onClick={<BuyButton 
        // key = {item.key}
        // image = {item.image}
        // alt = {item.alt}
        // title = {item.title}
        // rs = {item.rs}
        // />} 

        onClick= {() => handleBuyButton(item)}
           
      className="btn btn-primary">
      <i className="fa-solid fa-bag-shopping fa-xl" style={{ color: "#63e6be" }}></i> Buy Now
      </button>
     

      <button
    style={{ marginLeft: "10px", color: "#ff6b6b", background: "aliceblue", fontWeight: "700", border: "3px solid lightcoral" }}
//  onClick={() => handleRemoveButton(item)}
    onClick={() => handleRemoveButton(item)}  
    className="btn btn-danger"
    >
        <i className="fa-solid fa-trash fa-xl" style={{ color: "#ff6b6b" }}></i> Remove
    </button>
    <br />
  
     
        </div>
        </div>
        <br />
                
        <hr />
        <br />
        </li>
                    ))}
                </ol>
            ) }
            
        </div>
        <div className="container" style={{ marginTop: "20px", border:"5px solid white",backgroundColor:"rgb(250, 250, 255)", width:"1000px" }}>
            <br /> <br />
                            <h5  style={{color:"highlight"}}>Total Price: ₹{totalPrice.toFixed(2)}</h5>
                            <br />
                            <h4 style={{color:"darkcyan"}}>You Get 10% Discount</h4>
                            
                            <h4 style={{color:"darkcyan"}}>discounted Price: ₹{discountedPrice}</h4>
                            <br />
                            <button
                            style={{ marginLeft: "20px", color: "#63e6be", background: "aliceblue", fontWeight: "700", border: "3px solid cadetblue" }}
                            onClick={handleBuyAll}
                            className="btn btn-success"
                            >
                                <i className="fa-solid fa-credit-card fa-xl" style={{ color: "#63e6be" }}></i> Buy All
                            </button> <br /><br />
                        </div>
                    
        </>
    )
}

export default Cart;