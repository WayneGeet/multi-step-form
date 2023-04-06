import React from 'react';
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";

const Billings = () => {
  return (
    <div>
        <div className="border-1 border-blue-800 bg-transparent rounded-md 
            py-2 my-2 px-2 flex justify-start gap-4 items-start cursor-pointer
            hover:bg-red-100">
            <div className="pt-2">
                <img src={Arcade} alt="Arcade billing"/>
            </div>
            <div className="flex justify-center flex-col pb-1">
                <h3 className="text-xl text-sky-900 font-semibold">Arcade</h3>
                <p className="text-gray-300 font-semibold text-sm">$90/yr</p>
                <h4 className="text-sm text-sky-900 font-normal">2 months free</h4>
            </div>
        </div>

                <div className="border-1 border-blue-800 bg-transparent rounded-md 
                py-2 my-2 px-2 flex justify-start gap-4 items-start cursor-pointer
                    hover:bg-red-100">
                    <div className="pt-2">
                        <img src={Advanced} alt="Arcade billing"/>
                    </div>
                    <div className="flex justify-center flex-col pb-1">
                        <h3 className="text-xl text-sky-900 font-semibold">Advanced</h3>
                        <p className="text-gray-300 font-semibold text-sm">$120/yr</p>
                        <h4 className="text-sm text-sky-900 font-normal">2 months free</h4>
                    </div>
                </div>

                <div className="border-1 border-blue-800 bg-transparent rounded-md 
                py-2 my-2 px-2 flex justify-start gap-4 items-start cursor-pointer
                    hover:bg-red-100">
                    <div className="pt-2">
                        <img src={Pro} alt="Arcade billing"/>
                    </div>
                    <div className="flex justify-center flex-col pb-1">
                        <h3 className="text-xl text-sky-900 font-semibold">Pro</h3>
                        <p className="text-gray-300 font-semibold text-sm">$150/yr</p>
                        <h4 className="text-sm text-sky-900 font-normal">2 months free</h4>
                    </div>
                </div>
                
                <div className="border-1 border-blue-800 bg-transparent rounded-md 
                py-2 my-2 px-2 flex justify-center gap-4 items-start cursor-pointer
                    hover:bg-red-100">
                    <span>Monthly</span>
                    <span className="px-5">"icon"</span>
                    <span>Yearly</span>
                </div>
    </div>
  )
}

export default Billings