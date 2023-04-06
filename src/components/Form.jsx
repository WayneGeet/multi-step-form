import React from 'react'

const Form = () => {
  return (
    <div>
        <form method="GET" className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="inpt" className="font-normal text-sm cursor-pointer">Name</label>
                <input type="text" placeholder="e.g. Stephen King" id="inpt" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="inpt1" className="font-normal text-sm cursor-pointer">Email Address</label>
                <input type="text" placeholder="e.g. stephenking@lorem.com" id="inpt1" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="inpt2" className="font-normal text-sm cursor-pointer">Phone Number</label>
                <input type="text" placeholder="e.g. +1 234 567 890" id="inpt2" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
            </div>
                
                </form>
    </div>
  )
}

export default Form