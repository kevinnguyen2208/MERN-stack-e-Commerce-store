import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import ProfileScreen from './screens/ProfileScreen';


function App() {

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;


  
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <Link to="/">All Your Electronics</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin ?( <Link to="/products">Edit Product</Link>):(<div></div>)}
        </div>
    </header>
  
    <main className="main">
        <div className="content">
          <Route path="/products" component={ProductsScreen}/>
          <Route path="/shipping" component={ShippingScreen}/>
          <Route path="/payment" component={PaymentScreen}/>
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/invoice" component={InvoiceScreen}/>
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/profile" component={ProfileScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>     
    </div>
    </main>
    <footer className="footer">A creation of Le Bao Duy Nguyen for A3 SWE30003</footer>
</div>
</BrowserRouter>
  );
}

export default App;
