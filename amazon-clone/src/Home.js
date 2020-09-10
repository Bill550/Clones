import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="Banner" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product
                        id="49538094"
                        title="Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image = "https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SX450_.jpg"/>
                </div>

                < div className="home__row" >
                    <Product
                        id = "4903850"
                        title = "Men's Analog Sports Watch, LED Military Wrist Watch Large Dual Dial Digital Outdoor Watches Electronic Malfunction Two Timezone Back Light Water Resistant Calendar Day Date - Black"
                        price = {19.99}
                        rating= {4}
                        image="https://images-na.ssl-images-amazon.com/images/I/619xstmMPCL._AC_UX466_.jpg"/>
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) I Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99} rating={5} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/81CwzgotbCL._AC_SL1500_.jpg"/>
                    <Product
                        id='3254'
                        title ='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)'
                        price = {198.99}
                        rating ={4}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"/>
                    
                </div>

                < div className="home__row" >
                    <Product
                        id="90829332"
                        title="Samsung LC49RG9OSSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WORD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SX679_.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home
