
const Form = ({name, email, phone, nameHandler, emailHandler, phoneHandler}) => {
    
  return (
    <>
        <div>
            <h2 className="text-slate-800 text-3xl font-bold">Personal info</h2>
            <p className="text-gray-400 text-base">Please provide your name, email address, and phone number</p>
        </div>
        <div>
            <form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="inpt" className="font-normal text-sm cursor-pointer">Name</label>
                    <input value={name} onChange={nameHandler} type="text" placeholder="e.g. Stephen King" id="inpt" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="inpt1" className="font-normal text-sm cursor-pointer">Email Address</label>
                    <input type="email" value={email} onChange={emailHandler} placeholder="e.g. stephenking@lorem.com" id="inpt1" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="inpt2" className="font-normal text-sm cursor-pointer">Phone Number</label>
                    <input value={phone} onChange={phoneHandler} type="text" placeholder="e.g. +1 234 567 890" id="inpt2" className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
                    
                    </form>
        </div>
    </>
  )
}

export default Form