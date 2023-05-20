import React from 'react';

const Cart = ({ cart, removeFromCart, payHandler }) => {
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((picture) => {
      total += picture.price;
    });
    return total;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((picture) => (
            <div key={picture.id}>
              <img src={picture.image} alt={picture.name} />
              <span>{picture.name}</span>
              <span>{formatPrice(picture.price)}</span>
              <button onClick={() => removeFromCart(picture)}>Remove</button>
            </div>
          ))}
          <p>Total: {formatPrice(calculateTotal())}</p>
          <button onClick={payHandler}>Pay</button>
        </>
      )}
    </div>
  );
};

export default Cart;
