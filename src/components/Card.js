import React, {useState} from 'react';
import Form from './Form';
import Services from './Services/Services';
import Billing from './Billing/Billings';
import Finish from './Finish/Finish';

const Card = ({currStep}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectDeal, setSelectDeal] = useState("Arcade");
  const [isChecked, setIsChecked] = useState(Array(3).fill(null));
  const [month, setMonth] = useState(true);
  const [sub, setSub] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handleSub = ()=>{
    if(sub===1){
      setSub(2)
      setMonth(false)
    }
    if(sub===2){
      setSub(1)
      setMonth(true)
    }
    console.log(sub)
  }

  const nameHandler = (e)=>{
    setName(e.target.value)
  }

  const emailHandler = (e)=>{
    setEmail(e.target.value)
  }

  const phoneHandler = (e)=>{
    setPhone(e.target.value)
  }

  const pageDisplay = ()=>{
    switch(currStep){
      case 1:
        return <Form name={name}
         email={email} 
         phone={phone}
         nameHandler={nameHandler} 
         emailHandler={emailHandler} 
         phoneHandler={phoneHandler}/>
      case 2:
        return <Billing setActiveIndex={setActiveIndex} activeIndex={activeIndex} setSelectDeal={setSelectDeal} setMonth={setMonth} handleSub={handleSub} sub={sub} setSub={setSub}/>
      case 3:
        return <Services isChecked={isChecked} setIsChecked={setIsChecked} month={month}
        selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
      case 4:
        return <Finish services={selectedOptions} deal={selectDeal} month={month}/>
      default:
        return null
  }
  }
  return (
    <>
      <article className="mx-auto max-w-xl shadow-xl rounded-lg bg-white py-6 mt-16 relative ">
        <div className="px-7 pb-10 ">
            {pageDisplay()}
        </div>
      </article>
      
    </>
  )
}

export default Card

// It has been one great learning experience