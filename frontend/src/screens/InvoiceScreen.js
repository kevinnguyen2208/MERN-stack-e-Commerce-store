import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
 function InvoiceScreen(props) {

   const cart = useSelector(state => state.cart);

   const { cartItems, shipping, payment } = cart;
   if (!shipping.address) {
     props.history.push("/shipping");
   } else if (!payment.paymentMethod) {
     props.history.push("/payment");
   }
   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
   const shippingPrice = itemsPrice > 2000 ? 0 : 19.99;
   const taxPrice = 0.10 * itemsPrice;
   const totalPrice = itemsPrice + shippingPrice + taxPrice;


   useEffect(() => {

   }, []);



   return <div>
     <CheckoutSteps step1 step2 step3 step4 step5 ></CheckoutSteps>
     <div className="placeorder">
       <div className="placeorder-info">
         <div>
           <h3>
             Item is on the way to:
           </h3>
           <h3>{cart.shipping.fullName}</h3>
           <div>
             {cart.shipping.address}, {cart.shipping.city},
           {cart.shipping.postalCode}, {cart.shipping.country},
           </div>
         </div>
         <div>
           <h3>Payment Method</h3>
           <div>
            {cart.payment.paymentMethod}
           </div>
         </div>
         <div>
           <h2>Purchased Successfully</h2>
         </div>
         

       </div>
       <div className="placeorder-action">
         <ul>
           <li>
             <h3>Order Summary</h3>
           </li>
           <li>
             <div>Items</div>
             <div>${itemsPrice}</div>
           </li>
           <li>
             <div>Shipping</div>
             <div>${shippingPrice}</div>
           </li>
           <li>
             <div>Tax</div>
             <div>${taxPrice}</div>
           </li>
           <li>
             <div>Order Total</div>
             <div>${totalPrice}</div>
           </li>
         </ul>



       </div>

     </div>
   </div>

 }

 export default InvoiceScreen; 