import React, { useState } from 'react';
import { img_url } from './Constant';
import '../Styles/SubMenu.css'; // Importing a CSS file for styles
import { useDispatch } from "react-redux";
import { addCart, removeItem } from '../utils/CardSlice';

export default function SubMenu({ obj }) {
  const [showItem, setShowItem] = useState(false);
  const title = obj.card.card.title;
  const arr = obj.card.card.itemCards;
  const dispatch = useDispatch();

  return (
    <div className='submenu'>
      <div className="submenu-title-section" onClick={() => setShowItem(!showItem)}>
        <h1 className="submenu-title">{title}</h1>
        {showItem ? (
          <span className="toggle-arrow">⬆️</span>
        ) : (
          <span className="toggle-arrow">⬇️</span>
        )}
      </div>

      {showItem && (
        <div className="item-list">
          {arr.map((item) => {
            const { name, imageId, defaultPrice, description } = item.card.info;
            return (
              <div className="item-card" key={item.card.info.id}>
                <img className="item-image" src={img_url + imageId} alt={name} />
                <div className="item-details">
                  <h3 className="item-name">{name}</h3>
                  <p className="item-price">RS {defaultPrice / 100}</p>
                  <p className="item-description">Description: {description}</p>
                  <div className="button-container">
                    <button className="plus-button" onClick={() => {
                      dispatch(addCart({ ...item.card.info, quantity: 1 }));
                    }}>+</button>
                    <button className="minus-button" onClick={() => {
                      dispatch(removeItem(item.card.info));
                    }}>-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      
    </div>
  );
}
