import React from 'react'
import {img_url} from "./Constant"
import { Link } from 'react-router-dom'
export default function MainRes({name,img,location,resId}) {
  return (
  <Link to={`/menuitem/${resId}`}>
    <div className="main-res-item">
        <img src={img_url + img} alt={name} />
        <p>{name}</p>
        <p>{location}</p>
    </div>
  </Link>
  
  )
}
