import React, { useEffect, useState } from "react";
import { img_url, swiggy_API } from "./Constant";
import Recomadation from "./Recomadation";
import "../Styles/recomdation.css";
import "../Styles/mainRes.css";
import MainRes from "./MainRes";
import { Link, useParams } from "react-router-dom";
import IconCarousel from "./Carousel"
export default function Home() {
  const [resData, setResData] = useState([]);
  const [Recomadations, setRecomadations] = useState([]);
  const [mainRestrorant, setMainRestrorant] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(swiggy_API);
      const json = await response.json();
      // console.log(json)
      setResData(json);
      setRecomadations(json.data.cards[0].card.card.imageGridCards.info);
      setMainRestrorant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    getData();
  }, []);
  return (
    <div className="container">
      <div className="recomadation-carousel">
    {Recomadations && <h1>What's on your mind?</h1>}
      <IconCarousel data={Recomadations}></IconCarousel>
      </div>

      <div className="main-restrorant">
      <div className="res-heading">
      {mainRestrorant && <h1>Restrorant Near You</h1>}
      </div>
        
        <div className="res-item">
        {mainRestrorant &&
          mainRestrorant.map((item) => {
            return (
              <MainRes
                resId={item.info.id}
                name={item.info.name}
                img={item.info.cloudinaryImageId}
                location={item.info.areaName}
                key={item.info.id}
              ></MainRes>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
