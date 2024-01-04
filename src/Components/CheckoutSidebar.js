// components/CheckoutSidebar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/actions';

const CheckoutSidebar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Perform any necessary actions before clearing the cart (e.g., send order to server)
    // ...

    // Clear the cart
    dispatch(clearCart());
  };

  return (
    <div>
      <h3>Checkout List</h3>
      {cartItems.map((item) => (
        <div key={item.id} className='items'>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      ))}
      <hr />
      <div className='total'>
        <div>Total</div>
        <div>${calculateTotalPrice()}</div>
      </div>
      <hr/>
      <button onClick={handleCheckout}>Click To Checkout</button>
    </div>
  );
};

export default CheckoutSidebar;
