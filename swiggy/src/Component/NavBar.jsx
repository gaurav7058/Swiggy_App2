import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cardData = useSelector(store => store.cart);
  let ans=0;
  for(let item of cardData){
    ans+=item.quantity
  }

  return (
    <div className='navbar'>
      <div className="logo-brand">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="swiggy-img" />
        <p>BrandName</p>
      </div>
      <button className="menu-button" style={{ display: "none" }}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className='nav-links'>
        <Link to="/" className='home'>Home</Link>
        <Link to="/search" className='search'>Search</Link>
        <Link to="/cards" className='card-btn button-style'>🛒<span className='cardData-length'>{ans}</span></Link>
      </div>
    </div>
  );
}
