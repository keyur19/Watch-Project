import React from "react";
import CardOfMen from "./CardOfMen";
import CardOfMen2 from "./CardOfMen2";
const heading = {
    color:"hotpink",
    backgroundColor:"rgb(57, 6, 15)",
    display:"flex",
    justifyContent:"center",
    fontSize:"33px",
    fontFamily:"cursive"
}
function Men(){
    return(
        <>
        <div  className="container-fluid row ">
            <div  className="col-sm-3">
                <CardOfMen
                key = "1"
                 image = "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1710262277/rolexcom/new-watches/2024/watches/new-day-date/new-watches-2024-day-date-cover-m228235-0055_2401jva_001" 
                 title = "Rolex Day-Date"
                 rs = "16,000"
                 desc = "An expression for every face this express our enduring desire for rare and wide-ranging expertise to be found in even the smallest details. Colours, materials, motifs, hour markers – each element contributes to the harmony of the new combinations."
                 alt = "a"
                 
                /> <br />
            </div> <br /><br />
            <div className="col-sm-3"> 
                <CardOfMen 
                    key = "2"
                    image = "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1711119765/rolexcom/new-watches/2024/watches/new-day-date/new-watches-2024-day-date-40-mother-of-pearl-m228239-0078_2401jva_002"
                    title = "Rolex Day-Date 40"
                    rs = "28,000"
                    desc = "This second version is crafted in 18 kt white gold, features a pearlized white mother-of-pearl dial: a first for this model. Rare and refined, this mother-of-pearl shines with a striking variety of iridescent reflections."
                    alt = "b"
                   
                />  <br />
            </div>
            <div className="col-sm-3"><CardOfMen
            key = "3"
            image = "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1710777095/rolexcom/new-watches/2024/watches/new-cosmograph-daytona/new-watches-2024-cosmograph-daytona-cover-m126589rbr-0001_2401jva_001" 
            title = "Cosmograph Daytona"
            rs = "30,000"
            desc = "Cosmograph Daytona whose dials contrast white and black natural mother-of-pearl and a bezel set with brilliant-cut diamonds"
            alt = "c"
            /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen
                key = "4"
                image = "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1711297907/rolexcom/new-watches/2024/watches/new-rolex-deepsea/new-watches-2024-rolex-deepsea-cover-m136668lb-0001_2401jva_001"
                title = "Rolex Deepsea"
                rs = "50,000"
                desc = "Precious and technical. Majestic and innovative. A bright watch for the dark abyss. The new version of the Rolex Deepsea is engineered to shine into the ocean depths."
                alt = "d"
                /> <br />
            </div>
        </div>


        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfMen
                key = "5"
                    image = "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2024/upright-c/m126300-0005"
                    title = "Rolex Datejust 40"
                    rs = "22,000"
                    desc = "This Oyster Perpetual Datejust 41 in Oystersteel features a white dial and an Oyster bracelet.combines almost limitless freedom of colour with intensity and a smooth finish"
                    alt = "e"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "6"
                image = "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2024/upright-c/m126234-0051"
                title = "Rolex Datejust 36"
                rs = "45,000"
                desc = "This Oyster Perpetual Datejust 36 in Oystersteel and white gold features a mint green dial and a Jubilee bracelet. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial."
                alt = "f"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "7"
                image = "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2024/upright-c/m124060-0001"
                title = "Submariner"
                rs = "50,000"
                desc = "The Oyster Perpetual Submariner in Oystersteel with a Cerachrom bezel insert in black ceramic and a black dial with large luminescent hour markers."
                alt = "g"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "8"
                image = "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2024/upright-c/m126619lb-0003"
                title = "Submariner Date"
                rs = "40,000"
                desc = "The Submariner Date in 18 kt white gold with a Cerachrom bezel insert in blue ceramic and a black dial with large luminescent hour markers.proportion of silver, copper, platinum or palladium added, different types of 18 kt gold are obtained: yellow, pink or white."
                alt = "h"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfMen
                key = "9"
                image = "https://justintime.in/cdn/shop/products/FS4735.jpg?v=1682338503&width=823"
                title = "Fossil"
                rs = "12,000"
                desc = " Featuring a beautiful round dial shape, the stylish leather strap of this watch is long lasting and skin friendly. Made from premium quality leather material, the strap is sturdy and promises a comfortable fit when you adorn your wrist with it."
                alt = "i"
                /> <br />
            </div> 
            <div className="col-sm-3">
                <CardOfMen
                key = "10"
                image = "https://justintime.in/cdn/shop/products/FS4682.jpg?v=1682338459&width=823"
                title = "Fossil"
                rs = "15,000"
                desc = " The watch has a round gunmeal top ring, black dial with white lum hour markers and the three luminous hands. Paired again with a gunmetal mesh bracelet with safety mesh buckle"
                alt = "j"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen
                key = "11"
                image = "https://justintime.in/cdn/shop/products/G987.jpg?v=1682004516&width=823"
                title = "Casio"
                rs = "9,000"
                desc = "The dial of the watch is inspired by the original DW5000C. Digital Display black belt with black dial, water proof, awesome with every clothes"
                alt = "k"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "12"
                image = "https://justintime.in/cdn/shop/products/SRPD61K1.jpg?v=1682044841&width=823"
                title = "seiko"
                rs = "30,000"
                desc = "Seiko 5 Sports Collection Comes with Automatic Movement with Hardlex Glass Green Round Dial with 42.5 mm Stainless Steel Silver Color Stainless Steel Strap/Band Along with 2 Years Warranty Period"
                alt = "l"
                /> <br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfMen 
                key = "13"
                image = "https://justintime.in/cdn/shop/products/3600854.jpg?v=1682035236&width=823"
                title = "Movado"
                rs = "67,125"
                desc = "The rose gold round dial is protected by a mineral glass. The stainless steel strap comes in a black hue that further elevates the look of the timekeeper. Besides, it is completed with a buckle clasp to ensure a secure fit on the wrist."
                alt = "m"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "14"
                image = "https://justintime.in/cdn/shop/products/A832.jpg?v=1682009386&width=823"
                title = "Casio"
                rs = "5,995"
                desc = "Stainless Steel Band Regular timekeeping Analog 3 hands (hour, minute, second), 3 dials (date, day, 24-hour) battery life: 3 years on SR927SW Size of case: 47 ?? 43.5 ?? 10.4 mm Total weight: 124 g"
                alt = "n"
                /><br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "15"
                image = "https://justintime.in/cdn/shop/products/AX2440.jpg?v=1681998275&width=823"
                title = "Armani Exchange"
                rs = "14,995"
                desc = " quartz movement with 3-hand chronograph display; mineral crystal face; Rose gold plated stainless steel case; blue dial without date window Blue plated silicone strap with single prong strap buckle closure"
                alt = "o"
                /><br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "16"
                image = "https://justintime.in/cdn/shop/files/GW0575G5.jpg?v=1699611115&width=823"
                title = "Guess"
                rs = "15,495"
                desc = "Elevate your style with this male Analog wristwatch. The round 42 mm case and blue dial, made of stainless steel, feature a grey stainless steel strap, 24 mm wide"
                alt = "p"
                /><br />
            </div>
        </div>

        <div className="container-fluid row">
            <div className="col-sm-3">
                <CardOfMen 
                key = "17"
                image = "https://justintime.in/cdn/shop/products/FTW4060.jpg?v=1682021990&width=823"
                title = "Fossil Smartwatch"
                rs = "9,998"
                desc = "A perfect fusion of style and functionality, this men's smartwatch from the Gen 6 Smartwatch collection by Fossil is sure to make a style statement. The black round dial is housed in a 44 mm case."
                alt = "q"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen
                key = "18"
                image = "https://justintime.in/cdn/shop/products/FENIX_7_SILVER_GRAPHITE_010-02540-05.jpg?v=1682023477&width=823"
                title = "Garmain"
                rs = "28,000"
                desc = "rack more health stats, and get a closer look at what??s going on inside your body. Gorilla Glass black belt and silver dial sparks your beauty"
                alt = "r"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "19"
                image = "https://justintime.in/cdn/shop/products/TW0HXW303T.jpg?v=1682027590&width=823"
                title = "Helix"
                rs = "4,495"
                desc = "Helix is a must-have in every fashion-savvy watch collection. Functional on a digital movement, the black square dial is housed in a 46 mm case. It displays chronograph functionality."
                alt = "s"
                /> <br />
            </div>
            <div className="col-sm-3">
                <CardOfMen 
                key = "20"
                image = "https://justintime.in/cdn/shop/files/010-02430-70-removebg-preview.jpg?v=1684324951&width=823"
                title = "Garmain"
                rs = "40,000"
                desc = " This GPS smartwatch has advanced health monitoring and fitness features to help you better understand what??s going on inside your body. Track more health stats, and get a closer look at what??s going on inside your body"
                alt = "t"
                /> <br />
            </div>
        </div>

        <h3 className="container" style={heading}>Best Selling Watches</h3> <br />

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
        </>
    )
}

export default Men;