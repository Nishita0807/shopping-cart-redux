// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { setProducts } from './redux/actions/actions';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import "./app.css"
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <nav>
            <div className='navbar'>
<div>
Shopping Cart
</div>
<div >
<div>
<Link style={{textDecoration:"none", color:"white"}}to="/">Home Page</Link></div>
<div>
<Link style={{textDecoration:"none", color:"white"}}to="/cart">Cart Page</Link>
</div>
</div>
            </div>
            
       
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass a prop 'showSidebar' to Cart component */}
          <Route path="/cart" element={<Cart showSidebar={true} />} />
        </Routes>

        {/* Render CheckoutSidebar only on the Cart page */}
        {/* This won't use useLocation, it will rely on the prop passed to Cart */}
        {/* {isCartPage && <CheckoutSidebar />} */}
      </div>
    </Router>
  );
};

export default App;
