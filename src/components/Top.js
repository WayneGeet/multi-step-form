import React from 'react';
import bg_mobile from "../images/bg-sidebar-mobile.svg";

const Top = () => {
  return (
    <div>      
        <div className="w-full absolute -z-10 object-cover bg-blue-300 h-44 overflow-hidden ">
            <img src={bg_mobile} alt="" className="w-screen" />
          </div>
    </div>
  )
}

export default Top;