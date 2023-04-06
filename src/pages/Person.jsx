import React from 'react';
import bg_mobile from "../images/bg-sidebar-mobile.svg";
import Buttons from "../components/Buttons"
import Form from "../components/Form"

const Person = () => {
  
  return (
    <div className="bg-slate-50 h-screen relative">
      
      <section className=" ">
        <Buttons/>
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
              <Form/>
            </div>
        </article>
          <div className="bg-red-400 relative h-full">
            <button className="px-6 py-2 rounded bg-sky-900 text-white absolute right-0 top-20">
              Next Step
            </button>
          </div>
      </section>
    </div>
  )
}

export default Person