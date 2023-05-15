const Finish = ({services, deal, month}) => {
    
    return (
    <>
        <div className="mb-5">
            <h2 className="text-slate-800 text-3xl font-bold ">Finishing up</h2>
            <p className="text-gray-400 text-base">Double check everything looks okay before confirming</p>
        </div>

        <div className="">
            <h2>{deal}</h2>
            {services && services.map((service, i)=>{
                return(
                    <div key={i} className="">
                        <p>{service}</p>
                    </div>
                )
            })}
        </div>

        
    </>
    
  )
}

export default Finish