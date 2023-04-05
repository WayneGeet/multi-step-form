import React from 'react';
import bg_mobile from "../images/bg-sidebar-mobile.svg";
import Num from "../components/Num"

const Person = () => {
  const numbers = [1, 2, 3, 4]
  return (
    <div className="bg-slate-50 h-screen">
      
      <section className=" w-full flex justify-center gap-5 absolute top-8">
      {numbers.map((n)=>{
        return(
          <div className="cursor-pointer border-white-800 border-2 text-white font-bold w-10 h-10 rounded-full flex justify-center items-center ">
            <h3>
              {n}
            </h3>
          </div>
        )
      })}
      </section>
      
      <section>
        <div className="w-full bg-red-500">
            <img src={bg_mobile} alt="" className="object-contain w-full max-h-full" />
          </div>
      </section>

      <section className="px-5 relative bottom-28">
        <article className="mx-auto shadow-xl rounded-lg bg-white min-h-96 w-full">
            <div className="px-10 mx-auto py-10">
              <h2 className="font-bold text-3xl text-blue-950">Personal Info</h2>
              <p className="text-slate-400 pt-3">Please provide your name, email address and phone number</p>
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
        </article>
      </section>
    </div>
  )
}

export default Person