// components/Cart/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from "../../redux/actions/actions";
import CheckoutSidebar from '../CheckoutSidebar';
import "./cart.css";

const Cart = ({ showSidebar }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };



  return (
    <div>
      <h1>My Cart</h1>
      <div className='cart'>
        {cartItems.length > 0 ? (
          <>
            <div className='cart-items'>
              {cartItems.map((item) => (
                <div key={item.id} className='cart-item'>
                  <img src={item.images[0] || item.images[1] || item.images[2] || item.images[3] || item.images[4]} alt={item.title} />
                  <div>Title : {item.title}</div>
                  <div>Price : ${item.price}</div>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                </div>
              ))}
            </div>

            {/* Checkout summary */}
            <div className='checkout-summary'>
              {showSidebar && <CheckoutSidebar />}
            </div>
          </>
        ) : (
          <h1>Your cart is empty.</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
