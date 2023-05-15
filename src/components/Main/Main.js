import React, {useState} from 'react';
import Card from '../Card';
import Buttons from '../Btn/Buttons';
import Top from '../Top';

import "./Main.css"

const Main = () => {
    const [currStep, setCurrStep] = useState(1)
    const handleClick = (k)=>{
        if(k===1){
        setCurrStep((prev)=> (prev + 1))}
        console.log("increased")
        if(k===2){
            setCurrStep((prev)=>(prev -1))
            console.log("decreased")
        }
    }
    const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"]
    
  return (
    <div className="">
        <Top/>
        <div className="overflow-hidden">
            <div className="flex align-center absolute top-10 mb-5 w-full justify-center ">
                {steps && steps.map((step, i)=>{
                    return(
                        <div key={i} className="flex flex-col align-center w-16">
                            <div className={`${currStep===i+1 ? "bg-sky-500" : ""} w-8 h-8 flex justify-center align-center rounded-full font-semibold pointer-events-none text-white border border-white`}>{i+1}</div>
                        </div>
                )
                })}
            </div>
        </div>
        
        <div className="mx-auto px-10 py-10 w-full">
            <div className="">
                <div className="w-56 h-56 absolute bg-red-400 rounded-md border border-black"></div>
                <Card currStep={currStep}/>
            </div>
            <div className="flex items-center w-full translate-x-10 right-10 absolute bottom-20">
                <Buttons onClick={()=>handleClick(2)} >Back</Buttons>
                <Buttons onClick={()=>handleClick(1)} >Next Step</Buttons>
            </div>
        </div>
    </div>
    
  )
}

export default Main