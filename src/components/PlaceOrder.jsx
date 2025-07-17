import React from "react";
import {loadStripe} from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe("pk_test_51PkJ5mJieNOs5xjLMe19wEtbDar2FB54YxvRChtbRtG1klUK2DdEoar1wbVL1dSXRientAKCN2EsopLrY5FQk9kz00LtUvpgX8");

const mainheading = {
    color:"aliceblue",
    backgroundColor:"#284b63",
    display:"flex",
    justifyContent:"center",
    fontSize:"33px",
    fontFamily:"monospace"
}

const headingstylee = {
    color:"hotpink",
    backgroundColor:"rgb(250, 219, 224)",
    fontSize:"33px",
    fontFamily:"cursive"    
}

// const CheckOutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if(!stripe || !elements){
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type:"card",
//             card:cardElement,
//         });
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log(paymentMethod);
//             alert('Payment successful!');   
//         }
//     };
//     return(
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button type="submit" disabled = {!stripe} className="btn placeorder"> <i className="fa-solid fa-truck-fast fa-xl" style={{ color: "#63e6be" }}></i> Place Order</button>
//         </form>
//     );
// }
const paymentContainer = {
    // display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "20px"
};

const inputStyle = {
    base: {
        fontSize: '28px',
        color: 'hotpink',
        '::placeholder': {
            color: '#aab7c4',
        },
    },
    invalid: {
        color: 'red',
    },
};

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
       
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log(error);
        } else {
            console.log(paymentMethod);
            alert('Payment successful!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label className="d-flex justify-content-center" style={{fontSize:"30px"}}>Card Details</label>
            <CardElement options={{ style: inputStyle, hidePostalCode: true, }}  />
        </div> <br />
        <br />
        <button type="submit" disabled={!stripe} className="btn placeorder" style={{ marginTop: "20px" }}>
            <i className="fa-solid fa-truck-fast fa-xl" style={{ color: "hotpink" }}></i> Place Order
        </button>
    </form>
    );
};
function PlaceOrder(){
    return(
        <div>
            <h3 style={mainheading} className="d-flex justify-content-center">Final Step To Wear A Clock</h3>
            <br />
            <div className="container-fluid row">
                <div className=" text-center  col-sm-6">
                    <h5 style={headingstylee} className="d-flex justify-content-center">Pay Through QR Code</h5> <br />
                    <img className="img-fluid" style={{width:"70%", height:"300px"}} src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt = "qrcode" />
                </div>
                <div className=" text-center col-sm-6">
                <h5 style={headingstylee} className=" d-flex justify-content-center">Pay Through Cards</h5> 
                <br />
                <div className="container">
                    {/* <Elements 
                    stripe={stripePromise}>
                        <CheckOutForm />
                    </Elements> */}
                    <Elements stripe={stripePromise}>
                        <CheckOutForm />
                    </Elements>
                    
                </div>

                </div>
            </div> <br /><br /><br />
            <h5 style={headingstylee} className="container d-flex justify-content-center">Other Payment Methods</h5>  <br />
            <form style={{fontSize:"30px", color:"#74c0fc"}} className="container">
                <input style={{fontSize:"30px"}}  type="checkbox" name="pay" id="pay" required/>  <label htmlFor="ondele" style={{fontFamily:"initial"}}>Cash On Delivery</label> <br /><br />
                        
                <input  type="radio" name="delivery" id="del" /> <label style={{fontSize:"25px", fontFamily:"monospace"}} htmlFor="office">Delivery At Office Hours</label>  <br />
                <input type="radio" name="delivery" id="deli" defaultChecked/> <label style={{fontSize:"25px", fontFamily:"monospace"}} htmlFor="anywhere"> Delivery At Flexible Time</label>
                <br /> <br />
                <button onClick={() => {
                    alert("Your Order Has Been Placed");
                }} className=" btn placeorder"> <i class="fa-solid fa-truck-fast fa-xl"style={{ color: "#63e6be" }}></i> Place Order</button>
            </form>
            {/* <a   className="btn placeorder"><i class="fa-solid fa-truck-fast fa-xl"style={{ color: "#63e6be" }}></i> Place Order</a> */}

           

        </div>
    )
}

export default PlaceOrder;