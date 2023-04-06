import React from 'react'

const Services3 = () => {
    const services = [
        {title:"Online service", info:"Access to multiplayer games", price:"+$1/mo"},
        {title:"Larger storage", info:"Extra 1TB of cloud save", price:"+$1/mo"},
        {title:"Customizable profile", info:"Custom theme on your profile", price:"+$2/mo"},
    ]
  return (
    <div>
        {services.map((items, key)=>{
            return(
                <div className="my-4 py-3 grid grid-cols-5 items-center border rounded-lg border-gray-300">
                    <div className="cursor-pointer w-4 h-4 rounded-sm bg-transparent border border-gray-400 mx-auto"></div>
                    <div className="text-left col-span-3"> 
                        <h3 className="font-bold text-sky-900 text-base">{items.title}</h3>
                        <p className="text-gray-400 font-normal text-sm">{items.info}</p>
                    </div>
                    <div className="">
                        <p className="text-sm font-semibold text-indigo-700">{items.price}</p>
                    </div>

                </div>
            )
        })}
        
    </div>
  )
}

export default Services3