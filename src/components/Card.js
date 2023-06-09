import React, {useState} from 'react';
import Form from './Form';
import Services from './Services/Services';
import Billing from './Billing/Billings';
import Finish from './Finish/Finish';
import Thankyou from "./Thankyou";
// context import


const Card = ({currStep, thanks}) => {
  // set month as next
  const [isMonth, setIsMonth] = useState(false);
  const [purchase, setPurchase] = useState({service:"", billing:[]}); 
  // const [inputs, setInputs] = useState({name:"", email:"", phone:""})

  const addPurchase = (service) => {
    setPurchase({...purchase, service})
  }

  const handleBilling = (title, mp, yp, id, index) => {
    let newArr;
    if (!purchase.billing.find(item => item.id === id)) {
      newArr = [...purchase.billing, { addOn: title, mp: mp, yp: yp, id: id }];
      // console.log("item not there, added", id);
    }
    else{
      newArr = purchase.billing.filter((item, i) => item.id !== id)
      // console.log("item there, deleted")
    }
    setPurchase({...purchase, billing:newArr})
  }

  const pageDisplay = ()=>{
    switch(currStep){
      case 1:
        return( 
          <Form/>
        )
      case 2:
        return <Billing purchase={purchase} addPurchase={addPurchase} isMonth={isMonth} setIsMonth={setIsMonth}/>
      case 3:
        return <Services isMonth={isMonth} handleBilling={handleBilling} purchase={purchase}/>
      case 4:
        return <Finish services={purchase.billing} deal={purchase.service} isMonth={isMonth}/>
  }
  }
  return (
    <>
      <article className="mx-auto max-w-lg shadow-xl rounded-lg bg-white py-6 mt-14 relative max-h-[69vh]
      md:shadow-none md:bg-none md:min-w-[30vw] md:bg-transparent ">
        <div className="px-5 pb-10 md:min-h-[55vh] ">
            {!thanks ? pageDisplay() : <Thankyou/>}
        </div>
      </article>
      
    </>
  )
}

export default Card

// It has been one great learning experience