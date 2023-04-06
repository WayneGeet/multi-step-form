import React from 'react'

const Buttons = () => {
    const numbers = [1, 2, 3, 4]
  return (
    <div className="w-full flex justify-center gap-5 absolute top-8">
        {numbers.map((n)=>{
        return(
          <div className="cursor-pointer border-white-800 border-2
           text-white font-bold w-10 h-10 rounded-full flex justify-center items-center ">
            <h3>
              {n}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default Buttons