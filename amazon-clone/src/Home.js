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
                        title='The Lean Start-UP'
                        price={19.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={4}
                    />
                    <Product />
                {/*Product*/}
                </div>

                < div className="home__row" >
                    <Product />
                    <Product />
                    <Product />
                </div>

                < div className="home__row" >
                    <Product
                        id='3254'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)'
                        price={198.99}
                        rating={4}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg'
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
