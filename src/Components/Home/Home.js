// components/Home/Home.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import "./home.css"

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      alert("Successfully Added to Cart");
      dispatch(addToCart(product));
    } else {
      alert("Item is already in the cart");
    }
  };

  const renderProductCards = () => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.images[0] || product.images[1] || product.images[2] || product.images[3] || product.images[4]} alt={product.title} />
        <div>Title: {product.title}</div>
        <div>Price: ${product.price}</div>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    ));
  };

  return (
    <div className="product-container">
      <h1>All Items</h1>
      {Array.isArray(products) ? (
        <div className="product-grid">
          {renderProductCards()}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Home;
