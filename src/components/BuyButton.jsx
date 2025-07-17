import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";


const cardstyle = {
    backgroundColor:"aliceblue",
    width:"600px",
    border:"5px solid white"
}
const titlestyle = {
   color:"cadetblue",
   fontWeight:"bold",
   border:"5px solid cadetblue"
}
const rsstyle = {
    color:"red",
}
const inputstyle = {
    border:"3px solid cadetblue",
    backgroundColor:"ghostwhite",
    width:"65%",
}
const heading = {
    color:"hotpink",
    backgroundColor:"aliceblue",
    display:"flex",
    justifyContent:"center",
    fontSize:"33px",
    fontFamily:"cursive"
}

// const discount = 0.20;
// const discountedPrice = (rs * (1 - discount)).toFixed(2);
function BuyButton(){
    const location = useLocation();
    const {image, alt, title, rs} = location.state;


    // State for quantity
    const [quantity, setQuantity] = useState(1);

//     // remove commas
//     const cleanPrice = rs.replace(/,/g, '');
//     const originalprice = parseFloat(cleanPrice);


//     const discount = 0.10;

// const discountedPrice = (originalprice * (1 - discount) * quantity).toFixed(2);
// const discountedPrice = (originalPrice * (1 - discount) * quantity).toFixed(2);
// const discountedPrice = (originalPrice * (1 - discount) * quantity).toFixed(2);



    // Remove commas from the price string and convert to number
    const cleanPrice = rs.replace(/,/g, '');
    const originalPrice = parseFloat(cleanPrice);
    const discount = 0.10;

    // Calculate discounted price based on quantity
    const calculateDiscountedPrice = (originalPrice, discount, quantity) => {
        return (originalPrice * (1 - discount) * quantity).toFixed(2);
    };

    const discountedPrice = calculateDiscountedPrice(originalPrice, discount, quantity);
// Handler to increase quantity
let counter = 1;
const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
};

// Handler to decrease quantity
// Handler to decrease quantity
const handleDecrease = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    counter--;
 
};

// const navigate = useNavigate();
// in onclick = {navigate("/place")}
    return(
        <>
        <h3 className="container" style={heading}>Place Order</h3> <br />
        <br />
        <h3 className="container d-flex justify-content-center" style={{color:"hotpink", backgroundColor:"pink"}}>You Get 10% Discount</h3>
        <div  className="d-flex justify-content-center">     
        
        <div style={cardstyle}  className="card" >
            <br />
  <img style={{height:"300px"}} class="card-img-top" src={image} alt={alt} />
  <div className="card-body">
    <h4 style={titlestyle} className="card-title d-flex justify-content-center">{title}</h4>
    <br />
    <form>
    <input
        style={inputstyle}
        type="text"
        name="name"
        placeholder="JOHN DOE"
        
    />
    {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
    <br /><br />
    <input
        style={inputstyle}
        type="tel"
        name="number"
        placeholder="+123 123 123"
        
    />
    {/* {errors.number && <p style={{ color: "red" }}>{errors.number}</p>} */}
    <br /><br />
    <textarea
        style={inputstyle}
        name="address"
        placeholder="sweet home, 4 sweet society, London, U.K."
        rows="4"
        cols="40"
        // value={formData.address}
        // onChange={handleChange}
    ></textarea>
    {/* {errors.address && <p style={{ color: "red" }}>{errors.address}</p>} */}
    <br /><br />
    <label style={{ color: "blue" }} htmlFor="email">For Order Track</label>
    <br />
    <input
        style={inputstyle}
        type="email"
        name="email"
        placeholder="john@gmail.com"
      
    />
    {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
    <br /><br />
            </form>


            <button onClick={handleDecrease} className="btn btn-secondary" style={{ marginRight: "10px" }}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease} className="btn btn-secondary" style={{ marginLeft: "10px" }}>+</button>
                            <br /><br />
   <h5 style={rsstyle}>To Pay:- {(parseFloat(cleanPrice) * quantity)}  </h5>
    <h4 style={{fontFamily:"cursiv", color:"Highlight"}}>Hooray! You Get 10% Discount</h4>
    <h4 style={{fontFamily:"fantasy", color:"Highlight"}}>Now You Have To Pay:-  {discountedPrice}</h4> <br />
    {/* <p class="card-text">Some example text.</p> */}
    <Link  to = "/place" className="btn placeorder"><i class="fa-solid fa-truck-fast fa-xl"style={{ color: "#63e6be" }}></i> Place Order</Link>
  </div>
</div>
</div>
</>
    )
}

export default BuyButton;