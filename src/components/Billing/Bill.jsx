import React from 'react';
import "./Billing.css";

const Bill = ({sub, img, title, altText, price, onDealSelect, isActive, onSelect}) => {
  console.log(isActive)
  return (
    <>
        <div className={`${isActive && "bg-sky-200"} b2 bg-slate-300 h-20`} onClick={()=> {
          onDealSelect();
          onSelect();
          
          }}>
            <div className="pt-2 relative bottom-2"><img src={img} alt={altText}/></div>
            
            <div className="b1 relative" >
                <h3 className="text-xl text-sky-900 font-semibold cursor-pointer">{title}</h3>
                <p className="text-slate-600 font-semibold text-sm">{price}</p>
                <h4 className={`${sub===1 ? "opacity-0" : "opacity-1"} text-sm text-sky-900 font-semibold`}>2 months free</h4>
            </div>
             
            
            
        </div>
    </>
  )
}

export default Bill