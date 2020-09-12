import React from 'react';
//Importing Files
import './Header.css';

//ICONS
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return ( 
        <div className="header"> 
            {/* // logo // */ } 
            
            <Link to ='/'>
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img> 
            </Link>
            {/* // Search Bar // */ } 

            <div className="header__search" >
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div> 

            {/* // NavBar Component // */ } 
            <div className="header__nav" >
                <Link to={!user && '/login'}> 
                    {/* link to and history: link use to change URL and history helps us to pass the User from One page to another */}
                    <div onClick={handleAuthentication} className="haeder__option" >
                        <span className="header__optionLineOne">
                            Hello {!user ? 'Guest': user.email}
                        </span>

                        < span className="header__optionLineTwo" >
                                { user ? 'Sign Out' : 'Sign In' }
                        </span>
                    </div>
                </Link>
                <Link to="/orders">
                    < div className = "haeder__option" >

                        < span className="header__optionLineOne" >
                            Returns 
                        </span>

                        < span className="header__optionLineTwo" >
                            & Orders     
                        </span>
                    
                    </div>    
                </Link>
        
                < div className="haeder__option" >
                    <span className="header__optionLineOne" >
                    Your 
                    </span> 

                    <span className="header__optionLineTwo" >
                    Prime 
                    </span> 
                </div>

                <Link to = '/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>    
            </div>
        </div>
    )
}

export default Header