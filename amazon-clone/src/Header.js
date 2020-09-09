import React from 'react';
//Importing Files
import './Header.css';

//ICONS
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";




function Header() {
    return ( 
        <div className="header"> 
            {/* // logo // */ } 

                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img> 
            
            {/* // Search Bar // */ } 

            <div className="header__search" >
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div> 

            {/* // NavBar Component // */ } 
            <div className="header__nav" >
                <div className="haeder__option" >
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>

                    < span className="header__optionLineTwo" >
                        Sign In 
                    </span>
                </div>
                
                <div className="haeder__option" >
                    < span className="header__optionLineOne" >
                        Return 
                    </span>

                    < span className="header__optionLineTwo" >
                        & Orders     
                    </span>
                </div>

                < div className="haeder__option" >
                    <span className="header__optionLineOne" >
                    Your 
                    </span> 

                    <span className="header__optionLineTwo" >
                    Prime 
                    </span> 
                </div>

                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLineOne header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header