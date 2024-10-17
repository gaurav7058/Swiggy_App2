import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { img_url } from './Constant';
import "../Styles/Cards.css";
import { addCart, removeItem ,deleteItem} from '../utils/CardSlice';
import { useNavigate } from 'react-router-dom';

export default function Cards() {
  const navigate=useNavigate();
  const cardsData = useSelector(store => store.cart);
  const dispatch=useDispatch()
  return (
    <>
    
    <div className="cards-container">
      {
        cardsData.map((item) => {
          const { imageId, name, description, defaultPrice, price, quantity ,id} = item;
          return (
            <div className="card" key={id}>
              <img className="card-image" src={img_url + imageId} alt={name} />
              <div className="card-content">
                <p className="card-title">{name}</p>
                <p className="card-description">{description}</p>
                <p className="card-price">
                  Rs {defaultPrice ? defaultPrice / 100 : price / 100} x <span>{quantity}</span>
                </p>
                <div className="button-container">
                  <button className="plus-button" onClick={() => {
                    // Add item logic here
                    dispatch(addCart(item))
                  }}>+</button>
                  <button className="minus-button" onClick={()=>{
                    dispatch(removeItem(item))
                  }}>-</button>
                  <button className="remove-button" onClick={()=>{
                    dispatch(deleteItem(item))
                  }}>Remove</button>
                </div>
              </div>
            </div>
          )
        })
      }

        {cardsData.length>0 && <button onClick={()=>{
            navigate("/cheakout")
        }}>Cheak out</button>}
    </div>
      </>
  );
}
