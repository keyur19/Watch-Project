import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';


const fontdeco = {
    color:"black",
    fontWeight:"bold",
    fontFamily:"cursiv",
    fontSize:"22px",
}
const iconStyle = {
    color:"#74c0fc",
}
const shownText = {
}
function NavBar2(){

  const { cartItems } = useContext(CartContext);
    return(
        <>
         <div style={fontdeco} className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <button
          className="navbar-toggler container"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link style={shownText} className="nav-link active" aria-current="page" to="/">
              <i style={iconStyle} className="fa-solid fa-house"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={shownText} className="nav-link" to="/Men">
              <i style={iconStyle} className="fa-solid fa-user-secret"></i> Men's Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link style={shownText} className="nav-link" to="/Women">
              <i style={iconStyle} className="fa-solid fa-person-dress"></i> Women's Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link style={shownText} className="nav-link" to="/Collections">
              <i style={iconStyle} className="fa-solid fa-briefcase"></i> Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link style={shownText} className="nav-link" to="/Cart">
              <i style={iconStyle} className="fa-solid fa-bag-shopping"></i> Cart
              <span className="badge ms-2" style={{backgroundColor:"#74c0fc"}}>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      
        </nav>

        </div>
        </>
    )
}

export default NavBar2;