import React from 'react';
import { useSelector } from "react-redux";
import "../Styles/CheakOut.css";  // Add styles as needed
import { useNavigate } from 'react-router-dom';
import { img_url } from './Constant';

export default function Checkout() {
  const cartItems = useSelector(store => store.cart);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.defaultPrice ? item.defaultPrice / 100 : item.price / 100;
      return total + (itemPrice * item.quantity);
    }, 0);
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-items">
        {cartItems.map(item => (
          <div className="checkout-item" key={item.id}>
            <img className="checkout-item-image" src={img_url + item.imageId} alt={item.name} />
            <div className="checkout-item-details">
              <p className="checkout-item-name">{item.name}</p>
              <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
              <p className="checkout-item-price">Price: Rs {item.defaultPrice ? item.defaultPrice / 100 : item.price / 100}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-summary">
        <p>Total Price: Rs {calculateTotalPrice()}</p>
        <button className="checkout-confirm-button" onClick={() => {
          alert("Your order Successfully Done Please pay on delivery....");
          navigate("/");
        }}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
