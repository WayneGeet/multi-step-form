import React, {useState} from 'react';
import {TiTick} from "react-icons/ti";
import Service from "./Service";

const Services = ({selectedOptions, setSelectedOptions, isChecked, setIsChecked, month}) => {
    const services = [
        {title:"Online service", info:"Access to multiplayer games", monthly_price:"+$1/mo", yearly_price:"+10/year",},
        {title:"Larger storage", info:"Extra 1TB of cloud save", monthly_price:"+$1/mo", yearly_price:"+10/year",},
        {title:"Customizable profile", info:"Custom theme on your profile", monthly_price:"+$2/mo", yearly_price:"+20/year",}
    ]

    const handleChange = (i, option) =>{
        const stateArr = [...isChecked];
        if(stateArr[i] === null){
            stateArr[i] = <TiTick size={24}/>
            setIsChecked(stateArr)
            setSelectedOptions(()=>[...selectedOptions, option])
        }
        else{stateArr[i] = null;
            setIsChecked(stateArr);
            setSelectedOptions(selectedOptions.filter((selectedOption)=>selectedOption !== option))
        }
    }

    return (
    <>
        <div>
            <h2 className="text-slate-800 text-3xl font-bold">Pick add-ons</h2>
            <p className="text-gray-400 text-base">Add ons help enhance your gaming experience</p>
        </div> 
        <div className="">
            <Service title={services[0].title} info={services[0].info} pricing={month ? "+1/mo" : "+10/yr"} isChecked={isChecked[0]} onTick={()=>handleChange(0, "Online service")}/>
            <Service title={services[1].title} info={services[1].info} pricing={month ? "+2/mo" : "+20/yr"} isChecked={isChecked[1]} onTick={()=>handleChange(1, "Larger storage")}/>
            <Service title={services[2].title} info={services[2].info} pricing={month ? "+2/mo" : "+20/yr"} isChecked={isChecked[2]} onTick={()=>handleChange(2, "Customizable profile")}/>
        </div>
        
          
    </>
  )
}

export default Services