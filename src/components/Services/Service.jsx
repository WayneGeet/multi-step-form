import React from 'react'

const Service = ({title, info, pricing, isChecked, onTick}) => {
    const check = false
  return (
    <>
        <div className="grid grid-cols-6 px-4 py-2 bg-slate-300 rounded-md border">
            <div onClick={onTick} className="w-5 h-5 bg-white border flex items-center justify-center">{isChecked}</div>
            <div className="grid grid-flow-row col-span-4">
                <h2 className="text-slate-500 font-bold">{title}</h2> 
                <p>{info}</p>
            </div>
            <h4 className="text-sky-800">
                {pricing}
            </h4>
        </div>
    </>
  )
}

export default Service