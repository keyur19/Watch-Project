import React from "react";
import watch from "./wooden2.jpeg";
// import wat from "./watchhome.jpeg"
import logo from "./logo.jfif"
// import watch1 from "./watchcard1.jfif"
import CardOfMen2 from "./CardOfMen2";
import CardOfWomen2 from "./CardOfWomen2";
// import trend1 from "./trend1.jpg"
// import w1 from "./w1.jpeg";
// import w2 from "./w2.jpeg";
// import w3 from "./w3.jpeg";
// import w from "./watchcr.jpg";
import watch2 from "./w11.jpg"
// import watch3 from "./w12.jpg"
// import watch4 from "./w13.jpg"
import Card from "./Card";
import CollectionCard2 from "./CollectionCard2";
import watchlogo1 from "./imagelogo1.jfif"
import watchlogo2 from "./watchlogo2.png"
import watchlogo3 from "./watchlogo3.png"
import watchlogo4 from "./watchlogo4.png"
import watchlogo5 from "./imagelogo5.png"
import watchlogo6 from "./imagelogo6.jfif"
import watchlogo7 from "./watchlogo7.png"
import watchlogo8 from "./watchlogo8.png"
import watchlogo9 from "./watchlogo9.png"
import watchlogo10 from "./watchlogo10.png"
import watchlogo11 from "./watchlogo11.png"
// import tr2 from "./tr2.jpg";
// import tr3 from "./tr3.avif";

const containerStyle = {
    width:"80%",
}
const textblue = {
    color:"#74c0fc",
    fontWeight:"bold", 
    backgroundColor:"#74c1fc5e",
    fontFamily:"sans-sarif"
}
const heading = {
    color:"aliceblue",
    backgroundColor:"#284b63",
    display:"flex",
    justifyContent:"center",
    fontSize:"33px",
    fontFamily:"monospace"
}
const imageset = {
    width:"100%",
    height:"380px"
}
function Home(){
    return(
        <>
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
    <img src="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/IWC-Big-Pilot-Black-2.jpg?v=1676583544" alt="Los Angeles" class="d-block" style={{width:"100%",height:"470px"}} />
    <div class="carousel-caption">
      <h3 style={textblue}>Experience the Art of Timekeeping with Our Exclusive Collection</h3>
     
    </div>
  </div>
  <div class="carousel-item">
    <img src={watch} alt="Chicago" class="d-block" style={{width:"100%",height:"470px"}} />
    <div class="carousel-caption">
      <h3 style={textblue}>Discover the Perfect Watch to Match Your Unique Style.</h3>
      {/* <p>Thank you, Chicago!</p> */}
    </div> 
  </div>
  <div class="carousel-item">
    <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe93d9a16/images/Titan/Catalog/90147SL01_1.jpg?sw=800&sh=800" alt="New York" class="d-block" style={{width:"100%",height:"470px"}} />
    <div class="carousel-caption">
      <h3 style={textblue}>Cheers To Every Moment with Our Exclusive Range of Watches.</h3>
      {/* <p>We love the Big Apple!</p> */}
    </div>  
  </div>
  

  <div class="carousel-item">
    <img src={watch2} alt="New York" class="d-block" style={{width:"100%",height:"470px"}} />
    <div class="carousel-caption">
      <h3 style={textblue}>Grab The Oppertunity Of Showing Your Time</h3>
      {/* <p>We love the Big Apple!</p> */}
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

        <h3 className="container" style={heading}>Callaborations With</h3> <br />
        
        <div style={{width:"100%"}} className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2"><Card src={watchlogo1} h4="Rolex" /></div>
            <div className="col-md-2"><Card src={watchlogo2} h4="Omega" /></div>
            <div className="col-md-2"><Card src={watchlogo3} h4="Angelus" /></div>
            <div className="col-md-2"><Card src={watchlogo11} h4="Cuervo y Sobrinos" /></div>
            
            <div className="col-md-2"><Card src={watchlogo9} h4="Bovet" /></div>
            <div className="col-md-2"><Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMf9z4kZpLWJzzXQSInlhc-xUsGWDOWmX7g&s" h4="Bell & Boss" /></div>
            </div>        

            <div style={{width:"100%"}} className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2"><Card src={watchlogo5} h4="Alpina" /></div>
            <div className="col-md-2"><Card src={watchlogo6} h4="Movado" /></div>
            <div className="col-md-2"><Card src={watchlogo7} h4="Hublot" /></div>
            <div className="col-md-2"><Card src={watchlogo10} h4="Carl F. Bucherer" /></div>
            
            <div className="col-md-2"><Card src={watchlogo8} h4="Longines" /></div>
            <div className="col-md-2"><Card src={watchlogo4} h4="Casio" /></div>
            </div>  

            
            <div style={{width:"100%"}} className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2"><Card src="https://i.pinimg.com/736x/52/3b/24/523b2473950026ae3c2c3c9392efa9b6.jpg" h4="Blancpain" /></div>
            <div className="col-md-2"><Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliJoXUn7AyJZHXx3-Fm2Dw3RctDqeSBetuA&s" h4="Chopard" /></div>
            <div className="col-md-2"><Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCJ4K2AMFsgPH4u96DJfwLOnpkuONeGB5Q&s" h4="Philip Stein" /></div>
            <div className="col-md-2"><Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdlMTEJnTGr77OEmKOtgcONj4X_HQuq3zug&s" h4="Victorinox" /></div>
            
            <div className="col-md-2"><Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooO8AJANc2xugdsH6sYK6urDkylhOuPOWgA&s" h4="Brietling" /></div>
            <div className="col-md-2"><Card src="https://cdn.worldvectorlogo.com/logos/breguet.svg" h4="Breguet" /></div>
            </div>  
                
            <h3 className="container" style={heading}>Why Choose Wrist Wonders</h3> <br />
            
            <div className="row container">
                <div className="col-sm-6">
                    <img className="container" style={imageset} src={logo} alt="logo" />
                </div>
                <div className="col-sm-6 container">
                    <p style={{color:"darkblue", fontSize:"20px",fontWeight:"500"}}>At Wrist Wonders, we are dedicated to offering you the finest selection of timepieces that blend style, precision, and durability.
                        <br /> Here’s why you should choose us:</p>
                        <div className="container" style={{color:"hotpink", fontSize:"21px",fontWeight:"500",fontFamily:"-moz-initial"}}>
                    <p><i class="fa-solid fa-wand-magic-sparkles"></i> Exclusive Design</p> 
                    <p><i class="fa-brands fa-sketch"></i> Quality Product</p>
                    <p><i class="fa-solid fa-handshake"></i> Fictional Partnerships</p>
                    <p><i class="fa-solid fa-users"></i> Customer Satisfaction</p>
                    <p><i class="fa-solid fa-star"></i> Affordable Luxury</p>
                    <p><i class="fa-solid fa-truck-fast"></i> Post Services (after the product services)</p>
                    <br /><br />
                    </div>  
                </div>
            </div>

            {/* <h3 className="container" style={heading}>Top Trending Watches</h3> <br /> */}
            <h3 className="container" style={heading}>Best Selling Mens Watches</h3> <br />

<div className="container-fluid row">
    <div className="col-sm-2">
        <CardOfMen2 
        key = "21"
        image = "https://justintime.in/cdn/shop/files/download_12047851-2b93-4e08-ad35-089ce00afa70.jpg?v=1712049442&width=823"
        title = "Timex"
        rs = "13,596"
        desc = "Stainless steel saphire glass tang buckle"
        alt = "u"
        /> <br />
    </div>
    <div className="col-sm-2">
    <CardOfMen2 
        key = "22"
        image = "https://justintime.in/cdn/shop/files/download_ba0e51ac-4f2f-443d-bd95-4ebae5e474bc.jpg?v=1712049446&width=823"
        title = "Timex"
        rs = "15,196"
        desc = "Stainless steel saphire glass tang buckle"
        alt = "v"
        /> <br />
    </div>
    <div className="col-sm-2">
    <CardOfMen2 
        key = "23"
        image = "https://justintime.in/cdn/shop/products/981662_41_55_90.jpg?v=1682042257&width=823"
        title = "Roamer"
        rs = "29,950"
        desc = "White dial suits on your white tone skin stainless steel"
        alt = "w"
        /> <br />
    </div>
    <div className="col-sm-2">
    <CardOfMen2 
        key = "24"
        image = "https://justintime.in/cdn/shop/products/1W5pPvaOsQPorZ7NcFfQ6ZTd__SIZPbnv.jpg?v=1686826096&width=823"
        title = "Seiko"
        rs = "47,000"
        desc = "White dial stainless steel quality glass"
        alt = "x"
        /> <br />
    </div>
    <div className="col-sm-2">
    <CardOfMen2 
        key = "25"
        image = "https://justintime.in/cdn/shop/products/AX2748.jpg?v=1681997837&width=823"
        title = "Armani"
        rs = "14,995"
        desc = "black dial black strap looking proffesional in your office"
        alt = "y"
        /> <br />
    </div>
    <div className="col-sm-2"><CardOfMen2 
        key = "26"
        image = "https://justintime.in/cdn/shop/products/CA4500-16X.jpg?v=1682017886&width=823"
        title = "Citizen"
        rs = "27,900"
        desc = "Cream Dial Leather Belt"
        alt = "y"
        /> <br />
        </div>
</div>
<div className="container-fluid row">
            <div className="col-sm-2">
            <CardOfMen2 
                key = "27"
                image = "https://justintime.in/cdn/shop/products/1h-5ZfCVhrZb_A35wFnKksZuyhR39BOb.jpg?v=1703248917&width=823"
                title = "Boss"
                rs = "16,463"
                desc = "water resistent 2 years warranty"
                alt = "z"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfMen2 
                key = "28"
                image = "https://justintime.in/cdn/shop/products/1cX_fbWRZdDxBimPeZR-wUnHqrm7uYx1J.jpg?v=1700805143&width=823"
                title = "Boss Leather"
                rs = "16,425"
                desc = "Blue leather belt stainless steel"
                alt = "aa"
                /> <br />
            </div>
            <div className="col-sm-2">
                <CardOfMen2 
                key = "29"
                image = "https://justintime.in/cdn/shop/products/FTW4062.jpg?v=1682021999&width=823"
                title = "Fossil"
                rs = "9,598"
                desc = "waterproof smart watch by Fossil"
                alt = "ab"
                />
            </div>
            <div className="col-sm-2">
            <CardOfMen2 
                key = "30"
                image = "https://justintime.in/cdn/shop/products/BQ2457.jpg?v=1682324449&width=823"
                title = "Fossil"
                rs = "8,995"
                desc = "waterproof brown dial watch"
                alt = "ac"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfMen2 
                key = "31"
                image = "https://justintime.in/cdn/shop/files/25200377_1.jpg?v=1703251641&width=823"
                title = "Calvin Klein"
                rs = "9,576"
                desc = "blue dial with white steel belt give beauty to you"
                alt = "ad"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfMen2 
                key = "32"
                image = "https://justintime.in/cdn/shop/products/1rlbrb7jyvqyUKoHkkGDSKATUs8Gwz45s.jpg?v=1703248686&width=823"
                title = "Calvin Klein"
                rs = "9,576"
                desc = "black dial with black steel belt give beauty to you"
                alt = "ad"
                /> <br />
            </div>
        </div>
<h3 className="container" style={heading}>Best Selling Womens Watches</h3> <br />   
           
        <div className="container-fluid row">
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "33"
                image = "https://justintime.in/cdn/shop/products/ME3214.jpg?v=1682341333&width=823"
                title = "Fossil"
                rs = "17,495"
                desc = "water resistent steel with mineral glass"
                alt = "bw"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "34"
                image = "https://justintime.in/cdn/shop/products/FORERUNNER_245_MUSIC_BLACK.jpg?v=1682023195&width=823"
                title = "Garmain"
                rs = "37,290"
                desc = "black dial black silicon strap"
                alt = "bx"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "35"
                image = "https://justintime.in/cdn/shop/files/VENU_SQ_MUSIC_WHITE_SLATE_010-02426-84.jpg?v=1684321655&width=823"
                title = "Garmain"
                rs = "27,490"
                desc = "white strap with black colour"
                alt = "by"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "36"
                image = "https://justintime.in/cdn/shop/products/TWTXW202T.jpg?v=1682051436&width=823"
                title = "Timex"
                rs = "5,000"
                desc = "2 years warranty mineral glass"
                alt = "bz"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "37"
                image = "https://justintime.in/cdn/shop/files/PWTAA0323.jpg?v=1705574832&width=823"
                title = "Philipp plein"
                rs = "47,000"
                desc = "silicon strap blue dial"
                alt = "cb"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "38"
                image = "https://justintime.in/cdn/shop/files/PWJAA0622.jpg?v=1705574819&width=823"
                title = "Philipp plein"
                rs = "47,600"
                desc = "brass dial steel belt"
                alt = "bw"
                /> <br />
            </div>
        </div>
       
        <div className="container-fluid row">
            <div className="col-sm-2">
                <CardOfWomen2 
                key = "27"
                image = "https://justintime.in/cdn/shop/products/SKW2996.jpg?v=1682047314&width=823"
                title = "Skagen"
                rs = "10,995"
                desc = "Stainless stell mineral glass gray dial"
                alt = "bq"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "28"
                image = "https://justintime.in/cdn/shop/products/D217.jpg?v=1682006320&width=823"
                title = "Casio"
                rs = "4,895"
                desc = "Digital display rosegold color"
                alt = "br"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "29"
                image = "https://justintime.in/cdn/shop/products/1p5Nzn5J9ZPjk7aWX5QFjjjq7989sIIf0.jpg?v=1684140145&width=823"
                title = "Timex"
                rs = "2,097"
                desc = "green dial with yellow belt"
                alt = "bs"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "30"
                image = "https://justintime.in/cdn/shop/products/1XpOJDlOT83EdabvGuE7jQ5McVJoxfBWI.jpg?v=1686822493&width=823"
                title = "Casio"
                rs = "2,495"
                desc = "Digital display with dark blue color"
                alt = "bt"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "31"
                image = "https://justintime.in/cdn/shop/products/1QyspgkSQ4Q0guAxpYOw-l8sLjcvZ9N3j.jpg?v=1690451422&width=823"
                title = "Fossil"
                rs = "23,995"
                desc = "blue dial with silver belt"
                alt = "bu"
                /> <br />
            </div>
            <div className="col-sm-2">
            <CardOfWomen2 
                key = "32"
                image = "https://justintime.in/cdn/shop/products/FTW4069.jpg?v=1682022022&width=823"
                title = "smart watch"
                rs = "23,995"
                desc = "digital display with black dial and black belt"
                alt = "bv"
                /> <br />
            </div>
        </div>
        <br />
        <h3 className="container" style={heading}>Best Selling Smart Watches</h3> <br />   
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
        
        </>
    )
}
export default Home;