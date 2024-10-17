import React from 'react'
import {img_url} from "./Constant"
import "../Styles/recomdation.css"
export default function Recomadation({img}) {
  return (
     <div className="">
     <img src={img_url+img} alt="" />
     
     </div>
  )
}
