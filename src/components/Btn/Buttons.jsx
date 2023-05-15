import React from 'react'

const Buttons = ({children, onClick}) => {
  return (
    <>
        <button onClick={onClick} className="mx-auto px-5 py-3 bg-sky-800 text-white font-semi-bold rounded-md">{children}</button>
    </>
  )
}

export default Buttons