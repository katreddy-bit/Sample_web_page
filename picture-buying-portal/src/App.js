import React, { useState } from 'react';
import './App.css';

import picture1 from './images/picture1.jpg';
import picture2 from './images/picture2.jpg';
import picture3 from './images/picture3.jpg';
import picture4 from './images/picture4.jpg';
import picture5 from './images/picture5.jpg';

function App() {
  const [pictures, setPictures] = useState([
    { id: 1, name: 'Picture 1', image: picture1, price: 100 },
    { id: 2, name: 'Picture 2', image: picture2, price: 150 },
    { id: 3, name: 'Picture 3', image: picture3, price: 200 },
    { id: 4, name: 'Picture 4', image: picture4, price: 120 },
    { id: 5, name: 'Picture 5', image: picture5, price: 18 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (picture) => {
    setCart([...cart, picture]);
  };

  const removeFromCart = (picture) => {
    const updatedCart = cart.filter((item) => item.id !== picture.id);
    setCart(updatedCart);
  };

  const payHandler = () => {
    setPictures((prevPictures) => {
      const remainingPictures = prevPictures.filter((picture) => !cart.includes(picture));
      return remainingPictures;
    });
    setCart([]);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((picture) => {
      total += picture.price;
    });
    return total;
  };

  const formatPrice = (price) => {
    // Convert price to Indian Rupees format (INR)
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div>
      <h1>Picture Buying Portal</h1>
  
      <div className="pictures">
        {/* <h2>Pictures</h2> */}
        {pictures.map((picture) => (
          <div key={picture.id} className="picture">
            <h3 className="cart-total-heading"></h3>
            <img src={picture.image} alt={picture.name} />
            <button onClick={() => addToCart(picture)}>Buy</button>
            <span>{formatPrice(picture.price)}</span>
          </div>
        ))}
      </div>
  
      <div className="cart">
        <h2 >Shopping Cart Total Amount: {formatPrice(calculateTotal())}</h2>
        <button onClick={payHandler} className="pay-button">Pay</button>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((picture) => (
              <div key={picture.id} className="cart-item">
                <img src={picture.image} alt={picture.name} />
                <h3>{picture.name}</h3>
                <span>{formatPrice(picture.price)}</span>
                <button onClick={() => removeFromCart(picture)}>Remove</button>
              </div>
            ))}
            
           
          </>
        )}
      </div>
    </div>
  );
  
  
}

export default App;
