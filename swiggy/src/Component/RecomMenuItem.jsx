import React, { useEffect, useState } from 'react';
import { img_url, search_API, search_API2 } from './Constant';
import { useParams } from 'react-router-dom';
import "../Styles/recomMenuItem.css"
import {useDispatch} from "react-redux"
import {addCart,removeItem} from "../utils/CardSlice"
export default function RecomMenuItem() {
  const { query } = useParams();
  const [showItem, setShowItem] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(search_API + query + search_API2);
        const json = await response.json();
        const items = json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1);
        setShowItem(items);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getData();
  }, [query]);

  return (
    <div className="menu-grid-container">
      {showItem.map((item) => (
        <div className="menu-item-card" key={item.card.card.info.id}>
          <img
            src={item.card.card.info.imageId ? (img_url + item.card.card.info.imageId) : ("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/ia4wiu7j7yjgrlmm7vg2")}   
            className="menu-item-image"
          />
          
          <div className="menu-item-details">
            <h3 className="menu-item-name">{item.card.card.info.name}</h3>
            <p className="menu-item-description">{item.card.card.info.description}</p>
            <p className="menu-item-price">₹{item.card.card.info.price / 100}</p>
          </div>

          {/* Add + and - buttons */}
          <div className="item-count-buttons">
            <button className="plus-button" onClick={()=>{
              dispatch(addCart({...item.card.card.info,quantity:1}))
            }}>+</button>
            <button className="minus-button" onClick={()=>{
              dispatch(removeItem(item.card.card.info))
            }}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}
