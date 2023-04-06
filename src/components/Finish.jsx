import React from 'react'

const Finish = () => {
  return (
    <div className="">
        <div className="bg-red-50 rounded-lg px-4 py-4">
            <div className="py-2 items-center flex justify-between border-b border-gray-300">
                <h3 className="text-indigo-950 font-bold">Arcade (Monthly) <span className="block text-slate-400 font-normal underline">Change</span></h3>
                <p className="text-indigo-950 font-bold">$9/mo</p>
            </div>

            <div className="items-center flex cursor-pointer my-2 justify-between">
                <h3 className="text-slate-400 font-normal text-base">Online service</h3>
                <p>+$1/mo</p>
            </div>

            <div className="flex items-center cursor-pointer my-2 justify-between">
                <h3 className="text-slate-400 font-normal text-base">Larger storage</h3>
                <p>+$2/mo</p>
            </div>
        </div>
        <div className="bg-white items-center cursor-pointer my-4 py-2 px-4 flex justify-between">
            <h3 className="text-slate-400 font-normal text-base">Total (per month)</h3>
            <p>+12/mo</p>
        </div>
    </div>
    
  )
}

export default Finish