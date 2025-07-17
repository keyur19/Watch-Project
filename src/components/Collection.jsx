import React from "react";
import sports from "./sport2.jpeg";
// import daily from "./sport.jpeg";
// daily sport
import wooden from "./wooden2.jpeg"
import man from "./man.jpeg";
// import man2 from "./man2.jpeg"
import wooden2 from "./wooden1.jpeg"
import CollectionCard from "./CollectionCard";
import CollectionCard2 from "./CollectionCard2";
const containerStyle = {
    width:"80%",
}
const textblue = {
    color:"#fff",
    fontFamily:"sans-sarif",
}
const link = {
    color:"white",
    textDecoration:"none",
    width:"80px",
    height:"70px",
    // backgroundColor:"hotpink",
    border:"5px solid white",
    fontWeight:"500",
}
const head = {
    color:"#74c0fc",
    backgroundColor:"black"        
}
function Collection(){
    return(
        <>
        <div style={{backgroundColor:"rgba(0, 0, 0, 0.700)"}}>
            <br /><br /><br />
        <div style={containerStyle} className="container">
<div id="demo" class="carousel slide" data-bs-ride="carousel">

{/* <!-- Indicators/dots --> */}
<div class=" carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button> */}
</div>

{/* <!-- The slideshow/carousel --> */}
<div class=" carousel-inner">
  <div class="carousel-item active">
    <img src={sports} alt="Los Angeles" class="d-block" style={{width:"100%",height:"500px",}} />
    <div class="carousel-caption">
        <h3 style={textblue}><a style={link}   href="#sports"><i class="fa-solid fa-bag-shopping" style= {{color:"#fff"}}></i> Shop Now</a></h3>
      <p style={{fontFamily:"cursiv",fontSize:"22px",color:"#fff"}}>Sporty And Adventuorous Watches</p>
      
     
    </div>
  </div>
  <div class="carousel-item">
    <img src={wooden} alt="Chicago" class="d-block" style={{width:"100%",height:"500px"}} />
    <div class="carousel-caption">
        <h3 style={textblue}><a style={link}   href="#casual"><i class="fa-solid fa-bag-shopping" style= {{color:"#fff"}}></i> Shop Now</a></h3>
      <p style={{fontFamily:"cursiv",fontSize:"22px",color:"#fff", fontWeight:"bold", }}>For Buisness And Formal Wear</p>
    </div> 
  </div>
  <div class="carousel-item">
    <img src={man} alt="New York" class="d-block" style={{width:"100%",height:"500px"}} />
    <div class="carousel-caption">
        <h3 style={textblue}><a style={link}   href="#smart"><i class="fa-solid fa-bag-shopping" style= {{color:"#fff"}}></i> Shop Now</a></h3>
      <p style={{fontFamily:"cursiv",fontSize:"22px",color:"#fff"}}>Smart Watches For Smart Peoples</p>
    </div>  
  </div>
  

  <div class="carousel-item">
    <img src={wooden2} alt="New York" class="d-block" style={{width:"100%",height:"500px"}} />
    <div class="carousel-caption">
        <h3 style={textblue}><a style={link}   href="#vintage"><i class="fa-solid fa-bag-shopping" style= {{color:"#fff"}}></i> Shop Now</a></h3>
      <p style={{fontFamily:"cursiv",fontSize:"22px",color:"#fff", fontWeight:"bold"}}>Vintage - Inspired Watches</p>
    </div>  
  </div>


</div>

{/* <!-- Left and right controls/icons --> */}
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>

</div>

<br /><br /><br />

        <h3 style={head} className="container d-flex justify-content-center">Sporty And Adventuorous Watches</h3>
        <br />
        <div id="sports" className="container-fluid row" >
            <div className="col-sm-3">
                <CollectionCard 
                key = "21"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7276570b/images/Fastrack/Catalog/3286KM01_1.jpg?sw=800&sh=800"
                title = "Fastrack"
                rs = "4,995"
                desc = "Fastrack Thor Quartz Multifunction Red Dial Metal Strap Watch for Guys 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "za"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "22"
                image = "https://seikowatches.co.in/cdn/shop/files/SRPD53K1_540x.png?v=1685705156"
                title = "Seiko"
                rs = "2,195"
                desc = "Seiko Blue Dial Steel White Strap Watch 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "zb"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "23"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw120fc393/images/Fastrack/Catalog/3286KM03_1.jpg?sw=800&sh=800"
                title = "Fastrack"
                rs = "5,395"
                desc = "Fastrack Thor Quartz Multifunction Grey Dial Metal Strap Watch for Guys 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "zc"
                /> <br />
            </div>
            <div className="col-sm-3">
                  <CollectionCard 
                key = "24"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45aa75c1/images/Fastrack/Catalog/68029PP02_1.jpg?sw=800&sh=800"
                title = "Street-Line Girls Watch"
                rs = "2,195"
                desc = "Fastrack Street line Quartz Analog Digital Grey Dial Silicone Strap Watch for Girls 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "zd"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "25"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb73be20c/images/Fastrack/Catalog/3270SL02_1.jpg?sw=800&sh=800"
                title = "After Dark Quarts"
                rs = "4,895"
                desc = "Fastrack After Dark Quartz Analog with Date White Dial Leather Strap Watch for Guys 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "ze"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "26"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe37913f0/images/Fastrack/Catalog/3285QM01_1.jpg?sw=800&sh=800"
                title = "Date Black"
                rs = "3,695"
                desc = "Fastrack Thor Quartz Analog with Date Black Dial Metal Strap Watch for Guys 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "zf"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "27"
                image = "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0ad27012/images/Fastrack/Catalog/38076PP02W_1.jpg?sw=800&sh=800"
                title = "Thor Quarts"
                rs = "3,695"
                desc = "Fastrack AnaDigi Black Dial Plastic Strap Unisex Watch 24 Months Warranty:7 Days Return, Serviced Across India, Free Shipping Across India Pay on Delivery Available"
                alt = "zg"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "28"
                image = "https://seikowatches.co.in/cdn/shop/files/SRPD59K1_540x.png?v=1685705281"
                title = "5 sports"
                rs = "30,000"
                desc = " the brilliant orange dial, and a sporty rotating bezel - this watch is the perfect companion for all your adventures. 24 Months Warranty:7 Days Return, Serviced Across India,  Pay on Delivery Available"
                alt = "zh"
                /> <br />
            </div>
        </div>

        <h3 style={head} className="container d-flex justify-content-center">Most Selling Watches</h3>
        <br />
        <div className="container-fluid row">
            <div className="col-sm-2">
            <CollectionCard2 
                key = "29"
                image = "https://seikowatches.co.in/cdn/shop/files/SSK025K1_540x.png?v=1703766622"
                title = "Seiko Deception"
                rs = "40,000"
                desc = " Automatic with Manual Winding Stainless steel"
                alt = "zi"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "30"
                image = "https://seikowatches.co.in/cdn/shop/files/SRPK87K1_8e0f22df-145b-421f-a6f6-721a1ad6eb4f_540x.png?v=1716548728"
                title = "5sports"
                rs = "35,000"
                desc = "Stainless steel case dark blue dial"
                alt = "zj"
                /> <br />
            </div>
            <div className="col-sm-2">  <CollectionCard2 
                key = "31"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw759bd6fd/images/Titan/Catalog/90086KM02J_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "11,445"
                desc = "Chronograph White Dial Stainless Steel Strap Watch"
                alt = "zk"
                /> <br />
                </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "32"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc07c110a/images/Titan/Catalog/90086KM05_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "11,765"
                desc = "Black dial chronograph watch"
                alt = "zl"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "33"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf4ee9666/images/Titan/Catalog/1856NL02_1.jpg?sw=800&sh=800"
                title = "Aerobaticks"
                rs = "11,000"
                desc = "Green Dial Chronograph Leather Strap watch for Men"
                alt = "zm"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "34"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2735424c/images/Titan/Catalog/90077KM04_1.jpg?sw=800&sh=800"
                title = "Octane"
                rs = "10,000"
                desc = "Octane Black Dial Chronograph Watch for Men"
                alt = "zn"
                /> <br />
            </div>
        </div>
        <br />
        <h3 style={head} className="container d-flex justify-content-center">Formal Wear Watches</h3>
        <br />
        <div id="casual" className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "35"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd8d5d3aa/images/Titan/Catalog/1805NL07_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "06,795"
                desc = "Titan Octane Quartz Multifunction Black Dial With Black Leather Strap Watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zo"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "36"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfb87e6d9/images/Titan/Catalog/1762KL01_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "10,895"
                desc = "Blue Chrono Leather Strap watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zp"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "37"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcbaa6f7b/images/Titan/Catalog/1762KM02_1.jpg?sw=800&sh=800"
                title = "Metal"
                rs = "11,765"
                desc = "Titan Octane Black Dial Chrono Metal Strap watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zq"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "38"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8dac098f/images/Titan/Catalog/1858NL01_1.jpg?sw=800&sh=800"
                title = "Nylon"
                rs = "20,665"
                desc = "Titan Octane Aerobatics Mechanical Analog Black Dial Nylon Strap Watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zr"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "39"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6fb3aacb/images/Titan/Catalog/1857SP01_1.jpg?sw=800&sh=800"
                title = "Nylon"
                rs = "9,995"
                desc = "Titan OctaneSilver Dial Chronograph Nylon Strap For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zs"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "40"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw197b64e5/images/Titan/Catalog/90154NL01_1.jpg?sw=800&sh=800"
                title = "Classic Sporty"
                rs = "9,995"
                desc = "Titan Octane  Classic Sporty Black Dial Chronograph Leather Strap Watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zt"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "41"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6504db58/images/Titan/Catalog/90044KM03J_1.jpg?sw=800&sh=800"
                title = "Titan Quarts"
                rs = "12,525"
                desc = "Titan Octane Chronograph Blue Dial Stainless Steel Strap Watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zu"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "42"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4cf5e830/images/Titan/Catalog/1856QM01_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "12,525"
                desc = "Titan Octane Aerobatics  Anthracite Dial Chronograph Stainless Steel Strap Watch For Men Mineral Glass This watch offers 24 months warranty on the Movement from the date of purchase."
                alt = "zv"
                /> <br />
            </div>
        </div>

        <h3 style={head} className="container d-flex justify-content-center">Most Selling Watches</h3>

        <div className="container-fluid row">
            <div className="col-sm-2">
            <CollectionCard2 
                key = "43"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw22be07c1/images/Titan/Catalog/1857KL01_1.jpg?sw=800&sh=800"
                title = "Octane"
                rs = "9,995"
                desc = " Anthracite Dial Chronograph Leather Strap"
                alt = "zw"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "44"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw49e38b70/images/Titan/Catalog/90086KM03J_1.jpg?sw=800&sh=800"
                title = "Titan Octane"
                rs = "10,000"
                desc = "Titan Octane Quartz Black Dial Stainless Steel Strap"
                alt = "zx"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "45"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4cf5e830/images/Titan/Catalog/1856QM01_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "12,225"
                desc = "Anthracite Dial Chronograph Stainless Steel Strap"
                alt = "zy"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "46"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2735424c/images/Titan/Catalog/90077KM04_1.jpg?sw=800&sh=800"
                title = "BlackOctane"
                rs = "9,000"
                desc = "Octane Black Dial Chronograph Watch for Men"
                alt = "zz"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "47"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe5d82a3a/images/Titan/Catalog/90086KL03_1.jpg?sw=800&sh=800"
                title = "SilverOctane"
                rs = "10,000"
                desc = "Octane Silver Dial Chronograph Watch for Men"
                alt = "ya"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "48"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw759bd6fd/images/Titan/Catalog/90086KM02J_1.jpg?sw=800&sh=800"
                title = "SilverOctane"
                rs = "11,445"
                desc = "Quartz Chronograph White Dial Stainless Steel Strap"
                alt = "yb"
                /> <br />
            </div>
        </div>
        <br />
        <h3 style={head} className="container d-flex justify-content-center">Smart Watches</h3>
        <br />
        <div className="container-fluid row" id="smart">
            <div className="col-sm-3">
            <CollectionCard 
                key = "49"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw99629694/images/Fastrack/Catalog/38111PP01_1.jpg?sw=800&sh=800"
                title = "Fastrack"
                rs = "3,495"
                desc = "Fastrack Xtreme Pro with 3.6 cm AMOLED Display, Rugged Design, SingleSync BT Calling, Functional Crown with Black Strap 12 months warranty free shipping pay on delivery availiable"
                alt = "yc"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "50"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb85e3c38/images/Titan/Catalog/90166AP02_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "4,445"
                desc = "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Blue Leather Strap 12 months warranty free shipping pay on delivery availiable"
                alt = "yd"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "51"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwdd34172b/images/Titan/Catalog/90172AP02_1.jpg?sw=800&sh=800"
                title = "Evoke Blue"
                rs = "11,445"
                desc = "Titan Evoke Blue: Luminous AMOLED Display & Water-Resistant Smartwatch 12 months warranty free shipping pay on delivery availiable"
                alt = "ye"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "52"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw12b74301/images/Titan/Catalog/90172AL01_1.jpg?sw=800&sh=800"
                title = "Evoke Leather"
                rs = "10,000"
                desc = "Titan Evoke Leather: Luminous AMOLED Display & Water-Resistant Smartwatch 12 months warranty free shipping pay on delivery availiable"
                alt = "yf"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "53"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/Chronos_Black__2_-removebg-preview_500x.png?v=1690528562"
                title = "Boat"
                rs = "3,000"
                desc = "Smartwatch amoled display, BT calling Crest Os+, 100+ watch Faces 12 months warranty free shipping pay on delivery availiable"
                alt = "yg"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "54"
                image = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LunarConnectProPackaging1.1572d_800x.png?v=1708948695"
                title = "Boat Lunar"
                rs = "4,000"
                desc = "Round Amoled Display Water-Resistant Smartwatch 12 months warranty free shipping pay on delivery availiable"
                alt = "yh"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "55"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/LunarVista-FI_SilverMetal01_600x.png?v=1694435503"
                title = "Lunar Vista"
                rs = "4,000"
                desc = "Ai Voice Assistant Water-Resistant Smartwatch 12 months warranty free shipping pay on delivery availiable"
                alt = "yi"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "56"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_2be770f7-fea3-4b62-b686-33322264ae11_600x.png?v=1695812751"
                title = "Lunar Prime"
                rs = "1,899"
                desc = "Bluetooth calling watch face studio Luminous AMOLED Display & Water-Resistant Smartwatch 12 months warranty free shipping pay on delivery availiable"
                alt = "yj"
                /> <br />
            </div>
        </div>
        <br />
        <h3 style={head} className="container d-flex justify-content-center">Best Selling Watches</h3>
        <br />
        <div className="container-fluid row">
            <div className="col-sm-2">
            <CollectionCard2 
                key = "57"
                image = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Cosmos_Plus__2_-removebg-preview_500x.png?v=1689843080"
                title = "Cosmos Plus"
                rs = "3,899"
                desc = "Amoled Display, heart rate measure water resistent"
                alt = "yk"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "58"
                image = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LunarConnect-FI_Black01_600x.png?v=1695812751"
                title = "Lunar Prime"
                rs = "1,899"
                desc = "Bluetooth calling watch face studio AMOLED Display"
                alt = "yl"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "59"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/wave_hype-removebg-preview_500x.png?v=1702051942"
                title = "Wave Hype"
                rs = "1,500"
                desc = "hd display 50+ sports modes"
                alt = "ym"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "60"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/Storm_Plus_Packaging_4.162-removebg-preview_500x.png?v=1690534202"
                title = "Storm Plus"
                rs = "1,899"
                desc = "100+ sports modes sp02 monitoring"
                alt = "yn"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "61"
                image = "https://www.boat-lifestyle.com/cdn/shop/files/Lunar_Connect_Pro_Packaging_1.618-removebg-preview_500x.png?v=1686814071"
                title = "Call Plus Oasis"
                rs = "1,999"
                desc = "dynamic user interface 100+ sports modes qr tray"
                alt = "xe"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "62"
                image = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Artboard1_958d570f-a33d-4d58-a95d-5e481aa7d39d_800x.png?v=1707988146"
                title = "Wave Spectra"
                rs = "3,299"
                desc = "100+ sports modes ip68 dust resistence"
                alt = "xf"
                /> <br />
            </div>
        </div>

        <br />
        <h3 style={head} className="container d-flex justify-content-center">Vintage Watches</h3>
        <br />
        <div id="vintage" className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "63"
                image = "https://cdn.shopify.com/s/files/1/0322/8424/6155/files/2_Image_2e04b14a-adfa-4d88-822e-eee607c3e9db_480x480.jpg?v=1721815103"
                title = "King Seiko"
                rs = "10,999"
                desc = "King Seiko legacy and advance the collection into today’s era. On the black dial, the hands have a fine hairline finish that heightens the level of contrast with the dial’s dark surface and enhances legibility."
                alt = "yq"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CollectionCard 
                key = "64"
                image = "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/AQ/aq8/aq-800e-7a/assets/AQ-800E-7A.png.transform/main-visual-pc/image.png"
                title = "Casio"
                rs = "3,795"
                desc = "Reboot your retro vintage style with a contemporary update on the 1980s AQ-450 design. This brand-new vintage style watch is a beautiful blend of retro and stylish."
                alt = "yr"
                /> <br />
                </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "65"
                image = "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/AQ/AQ2/AQ-230A-7BMQ/assets/AQ-230A-7BMQ_01.jpg.transform/main-visual-pc/image.jpg"
                title = "Casio"
                rs = "2,345"
                desc = "3 year battery resin chrome plated with low weight This brand-new vintage style watch is a beautiful blend of retro and stylish."
                alt = "ys"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "66"
                image = "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/AQ/AQ2/AQ-230A-1DMQ/assets/AQ-230A-1DMQ_01.jpg.transform/main-visual-pc/image.jpg"
                title = "Vintage Casio"
                rs = "2,395"
                desc = "3 year battery resin chrome plated, stainless steel band with low weight This brand-new vintage style watch is a beautiful blend of retro and stylish."
                alt = "yt"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
            <CollectionCard 
                key = "67"
                image = "https://www.casio.com/content/casio/locales/in/en/products/watches/casio/standard/vintage/_jcr_content/root/responsivegrid/teaser.casiocoreimg.jpeg/1687340878622/casio-vintage-a1000mg-9ef-2012-1920x612.jpeg"
                title = "Vintage Casio"
                rs = "2,395"
                desc = "3 year battery resin chrome plated, beautiful brown belt, stainless steel band with low weight This brand-new vintage style watch is a beautiful blend of retro and stylish."
                alt = "yu"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "68"
                image = "https://www.therevolverclub.com/cdn/shop/files/WhatsApp_Image_2024-07-28_at_19.57.00_129f126e.jpg?v=1722259666&width=1200"
                title = "HMT Rachana"
                rs = "4,997"
                desc = "Movement: Hand-winding, Decade: 1970s India Dial Colour: Black with dark blue strap give smell of our history"
                alt = "yv"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "69"
                image = "https://www.therevolverclub.com/cdn/shop/files/seikodolceweb1.jpg?v=1721473438&width=1000"
                title = "Seiko Dolce"
                rs = "2,395"
                desc = "Strap: Integrated Bracelet (length around 17 cm) unique dial Decade: 1980s Japan Gold dial 3 month warranty"
                alt = "yw"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CollectionCard 
                key = "70"
                image = "https://www.therevolverclub.com/cdn/shop/files/newseikoweb1.jpg?v=1721645487&width=1000"
                title = "Seiko 5"
                rs = "8,199"
                desc = "black dial silver strap with memory of black and white movies stainless steel strap"
                alt = "yx"
                /> <br />
            </div>
        </div>
        <br />
        <h3 style={head} className="container d-flex justify-content-center">Most Selling Watches</h3>
        <br />
        
        <div className="container-fluid row">
            <div className="col-sm-2">
                {/* https://www.therevolverclub.com/cdn/shop/files/seiko5web1.jpg?v=1721043402&width=1000 */}
                <CollectionCard2 
                key = "71"
                image = "https://www.therevolverclub.com/cdn/shop/files/seiko5websitefinal1.jpg?v=1721124952&width=1000"
                title = "Seiko 5"
                rs = "3,199"
                desc = "black dial with dark blue strap leather belt"
                alt = "yy"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "72"
                image = "https://www.therevolverclub.com/cdn/shop/files/SEIKO5SPORTSDARKBLUE1FINAL_WEBSITE_2.png?v=1720267052&width=1000"
                title = "Seiko 5 sports"
                rs = "8,199"
                desc = "black dial golden strap sparks"
                alt = "yz"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "73"
                image = "https://www.therevolverclub.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_3.29.26_PM.jpg?v=1720000805&width=1800"
                title = "Seiko automatic"
                rs = "4,071"
                desc = "black dial silver strap"
                alt = "xa"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "74"
                image = "https://www.therevolverclub.com/cdn/shop/products/WhatsAppImage2022-10-07at2.37.56PM_1_d62e0bf6-0af2-4a93-a268-4ae803ad923e.jpg?v=1677615748&width=1200"
                title = "Seiko pogue"
                rs = "55,460"
                desc = "acrylic glass stainless steel"
                alt = "xb"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "75"
                image = "https://www.therevolverclub.com/cdn/shop/products/omega4.jpg?v=1677614815&width=1000"
                title = "Omega"
                rs = "35,400"
                desc = "Gold dial with black strap"
                alt = "xc"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CollectionCard2 
                key = "76"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe93d9a16/images/Titan/Catalog/90147SL01_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "9,900"
                desc = "Titan Avant Garde Quartz Multifunction Leather Strap"
                alt = "xd"
                /> <br />
            </div>
        </div>
        </div>
        
        </>

    )
}

export default Collection;