import React, { useState } from 'react';
import { img_url, search_API, search_API2 } from './Constant';
import '../Styles/Search.css'; // Import CSS for styling
import { useDispatch,useSelector } from "react-redux";
import { addCart, removeItem } from '../utils/CardSlice';
import Loader from "./Loader"
import { addSearchResult } from '../utils/SearchSlice';
export default function Search() {
  const [query, setQuery] = useState("");
  const [item, setItem] = useState([]);
  const[showLoader,setShowLoader]=useState(false)
  const dispatch = useDispatch();
  const searchInSlice=useSelector(store=>store.Search)
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={() => {

          if(!query.length) return
          let hasItemSlice=searchInSlice.find((item)=>{
            return item.query==query
          })
          if(hasItemSlice){
            setItem(hasItemSlice.results)
            return
          }

          const getData = async () => {
            const response = await fetch(search_API + query + search_API2);
            const json = await response.json();
            setItem(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
            dispatch(addSearchResult({query,query,results:json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1)}))
          }
          getData();
          setShowLoader(true)
          setItem([])
        }}>🔍</button>
      </div>

        {showLoader && !item.length ? <Loader></Loader>: <div className="results-container">
        {item && item.map((item) => {
          const { id, imageId, name, price, description } = item.card.card.info;
          return (
            <div className="result-card" key={id}>
              <img className="result-image" src={img_url + imageId} alt={name} />
              <h2 className="result-name">{name}</h2>
              <p className="result-description">{description}</p>
              <p className="result-price">Rs {price / 100}</p>
              <div className="button-container">
                <button className="plus-button" onClick={() => {
                  dispatch(addCart({...item.card.card.info,quantity:1}));
                }}>+</button>
                <button className="minus-button" onClick={() => {
                  dispatch(removeItem(item.card.card.info));  // Fix: Dispatch removeItem correctly
                }}>-</button>
              </div>
            </div>
          );
        })}
      </div>}
     
    </>
  );
}
