import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img_url } from "./Constant";
import { Link } from "react-router-dom";
import "../Styles/recomdation.css"
// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-arrow next-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer"
      }}
    >
      Next
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-arrow prev-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer"
      }}
    >
      Prev
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  nextArrow: <NextArrow />, // Use custom next arrow
  prevArrow: <PrevArrow />, // Use custom previous arrow
};

const IconCarousel = ({ data }) => {
  return (
    <div style={{ margin: "20px", position: "relative" }}>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item) => {
            let str = item.description || "";  // If undefined, fallback to an empty string

            if (str.includes(" ")) {
              let arr = str.split(" ");
              str = arr.join("");
            }
          
            if (str.includes("North")) return null; // Fix: Returning null instead of undefined
            if (str.includes("Chinese")) return null; // Fix: Returning null instead of undefined
            if (str.includes("SouthIndia")) return null;
            
            return (
              <div className="carousel-img" key={item.id}>
                <Link to={`/show/${item.description}`}>
                  <img
                    src={img_url + item.imageId}
                    alt={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default IconCarousel;
