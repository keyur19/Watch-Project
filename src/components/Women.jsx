import React from "react";
import CardOfWomen from "./CardOfWomen";
import CardOfWomen2 from "./CardOfWomen2";
const heading = {
    color:"hotpink",
    backgroundColor:"rgb(57, 6, 15)",
    display:"flex",
    justifyContent:"center",
    fontSize:"33px",
    fontFamily:"monospace"
}
function Women(){
    return(
        <>
        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfWomen 
                key= "11"
                image = "https://justintime.in/cdn/shop/products/1EDVqQC814ofTwfof4LQf-TVZtlZJlzEs.jpg?v=1695989211&width=823"
                title = "Michael Kors"
                rs = "23,995"
                desc = " features a wheat brushed dial, chronograph movement and rose gold-tone stainless steel and wheat silicone strap."
                alt = "ba"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfWomen 
                key = "12"
                image = "https://justintime.in/cdn/shop/products/1X51owfb9SWW2vZVwgMICGQRSis_WPmvi.jpg?v=1690451434&width=823"
                title = "Michael Kors"
                rs = "23,995"
                desc = "Featuring a chronograph movement with bold numerals on the dial, this watch was designed with the jet-set lifestyle in mind. stainless steel 2 years warranty"
                alt = "bb"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "13"
                image = "https://justintime.in/cdn/shop/products/SH239.jpg?v=1682009594&width=823"
                title = "Casio"
                rs = "11,195"
                desc = "These elegant timepieces will give you that special sparkle, with crystals accenting the octagonal bezel at the 3, 6, 9, and 12 o'clock positions.But there's more to life than beauty "
                alt = "bc"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "14"
                image = "https://justintime.in/cdn/shop/products/A1938.jpg?v=1682009912&width=823"
                title = "Casio"
                rs = "7,195"
                desc = "the epic analog line with an even slimmer profile for sophisticated comfort, plus a beautiful, cleanly rounded watch face for a super-easy read"
                alt = "bd"
                /> <br />
            </div>
        </div>


        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfWomen 
                key = "15"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6c9df22a/images/Titan/Catalog/2656WM01_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "10,000"
                desc = "Achieve timeless elegance with this watch featuring a clean white dial and skeletal hands.The sliding clasp ensures ultimate comfort, while a rose gold dial add a touch of sophistication."
                alt = "be"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "16"
                image = "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=800&sh=800"
                title = "Titan"
                rs = "5,995"
                desc = "Elevate your style for coffee dates and evening events with this Raga watch featuring a dark brown shining dial, sectoral markings, and a brown metal sleek strap."
                alt = "bf"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "17"
                image = "https://shop.timexindia.com/cdn/shop/products/twel14503_670x.jpg?v=1690219451"
                title = "Timex"
                rs = "5,995"
                desc = "It is a harmonious blend of sleek design and practical versatility, tailored for the woman who seeks a timepiece that elegantly combines functionality with style."
                alt = "bg"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "18"
                image = "https://shop.timexindia.com/cdn/shop/files/TW000X210-1_670x.jpg?v=1694149069"
                title = "Timex"
                rs = "5,995"
                desc = " Timex revolutionized watch making by using cutting-edge technology in products in outdoor, sports and style categories. Today, Timex is a household name synonymous with design, durability and performance"
                alt = "bh"
                /> <br />
            </div>
        </div>


        <div className="container-fluid row">
            <div className="col-sm-3">
            <CardOfWomen 
                key = "19"
                image = "https://www.rado.com/media/catalog/product/t/r/truesquare_r27178205_sld_web.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center"
                title = "Rado"
                rs = "2,43,800"
                desc = " This state-of-the-art calibre delivers outstanding precision combined with enhanced resistance to magnetic fields with its reliable NivachronTM hairspring and has a power reserve of 80 hours"
                alt = "bi"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "20"
                image = "https://www.rado.com/media/catalog/product/c/o/coupole_r22885903_sld_web.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center"
                title = "Rado Shine"
                rs = "1,49,600"
                desc = " Ensuring perfect visibility of the dark brown mother-of-pearl dial with 12 Top Wesselton diamonds and a moonphase indicator. The polished stainless steel case is in rose gold coloured PVD, same as the bezel and crown."
                alt = "bj"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "21"
                image = "https://www.rado.com/media/catalog/product/h/y/hyperchrome_r32158102_sld_web.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center"
                title = "Rado Gray"
                rs = "5,42,900"
                desc = "scratch-resistant watch. The grey smocked sapphire crystal dial with its rose gold-coloured applied indexes with black veneer and white Super-LumiNova® perfectly match the rose gold-coloured hands"
                alt = "bk"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "22"
                image = "https://www.rado.com/media/catalog/product/t/r/truesquare_r27073712_sld_web.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center"
                title = "Rado True Square"
                rs = "3,10,200"
                desc = "Experience the perfect fusion of artistry and precision with the Rado True Square Automatic Open Heart watch. This remarkable timepiece showcases a captivating open-heart design."
                alt = "bl"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfWomen 
                key = "23"
                image = "https://justintime.in/cdn/shop/files/MK4734.jpg?v=1701333378&width=823"
                title = "Michael Kors"
                rs = "19,995"
                desc = "Michael Kors' 42mm Slim Runway watch features a black pavé sunray dial, three-hand movement and black stainless steel bracelet."
                alt = "bm"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "24"
                image = "https://justintime.in/cdn/shop/products/SH235.jpg?v=1682009545&width=823"
                title = "Casio"
                rs = "9,995"
                desc = "clean lines and minimalist design.These elegant timepieces will give you that special sparkle, with crystals accenting the octagonal bezel at the 3, 6, 9, and 12 o'clock positions."
                alt = "bn"
                /> <br />
            </div>
            <div className="col-sm-3">
            <CardOfWomen 
                key = "25"
                image = "https://justintime.in/cdn/shop/products/T1122103311300.jpg?v=1682060992&width=823"
                title = "Tissot"
                rs = "45,500"
                desc = "This women's watch from the T-Lady collection by Tissot merges performance with modern day styling and will surely upgrade your accessory collection."
                alt = "bo"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfWomen 
                key = "26"
                image = "https://justintime.in/cdn/shop/files/PWTAA0223.jpg?v=1705574841&width=823"
                title = "Philip Plein"
                rs = "47,000"
                desc = "A strong and distinctive Plein DNA is conveyed by the iconic hexagonal pattern that is engraved all over the watch: on the background of the dial and on the silicon strap."
                alt = "bp"
                /> <br /></div>
        </div>

        <h3 className="container" style={heading}>Best Selling Watches</h3> <br />
        
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
        
        </>
    )
}

export default Women;