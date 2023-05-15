import React, {useState} from 'react';
import Bill from "./Bill"
import Arcade from "../../images/icon-arcade.svg";
import Advanced from "../../images/icon-advanced.svg";
import Pro from "../../images/icon-pro.svg";
import "./Billing.css";
import {Switch} from "antd";

const Billings = ({setSelectDeal, handleSub, sub, activeIndex, setActiveIndex}) => {


    const handleBill = (deal)=>{
      if(deal===1){
        setSelectDeal("Arcade")
      }
      else if(deal === 2){
        setSelectDeal("Advanced")
      }
      else if(deal ===3){
        setSelectDeal("Pro")
      }
    }
    
  return (
    <>
        <div className="">
            <h2 className="cursor-pointer text-slate-800 text-3xl font-bold">Select your plan</h2>
            <p className="text-gray-400 text-base">You have the option of monthly or yearly billing</p>
        </div>
        <div className="">
          <Bill onSelect={()=>setActiveIndex(0)} isActive={activeIndex===0} onDealSelect={() =>handleBill(1)} title={"Arcade"} img={Arcade} altText={"arcade"} sub={sub} price={sub===1 ? "$9/mo":"$90/yr"} />
          <Bill onSelect={()=>setActiveIndex(1)} isActive={activeIndex===1} onDealSelect={()=>handleBill(2)} title={"Advanced"} img={Advanced} altText={"advanced"} sub={sub} price={sub===1 ? "$12/mo":"$120/yr"} />
          <Bill onSelect={()=>setActiveIndex(2)} isActive={activeIndex===2} onDealSelect={()=>handleBill(3)} title={"Pro"} img={Pro} altText={"pro"} sub={sub} price={sub===1 ? "$15/mo":"$150/yr"} />
        </div>


        <button className="border border-sky-300 rounded-md px-5 py-4 relative translate-x-20 bg-slate-400 text-white font-semibold" onClick={handleSub}>Toggle y and m</button>
        {/* <div className="bg-slate-300 rounded-md flex justify-center py-5">
          <button type="button" className={`font-semibold text-slate-700 border-none mx-3 underline`}>Year</button>
          <Switch/>
          <button type="button" className={`font-semibold text-slate-700 border-none mx-3 underline`}>Month</button>
        </div>  */}
        
    </>
  )
}

export default Billings