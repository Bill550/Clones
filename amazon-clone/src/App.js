import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Its Help for URL IN broswer install by using command npm install react-router-dom
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // useEffect: this will only run when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User Logged In is >>>  ', authUser);
      if (authUser) {
        // the user Logged In / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged Out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>

          {/* Login Page */}
          <Route path="/login">
            <Login/> {/* Components */}
          </Route>

          {/* Checkout Page */}
          <Route path="/checkout">
            {/*Header*/}
            <Header />

            {/*Checkout*/}
            <Checkout />
          </Route>

          {/* //Home Page */}
          <Route path="/">      {/*Defult Route has to be in Bottom of all Route*/}
            {/*Header*/}
            <Header />

            {/*Home*/}
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
