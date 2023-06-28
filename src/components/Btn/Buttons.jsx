import {useContext} from "react";
import {BtnContext} from "../Context";
const Buttons = ({children, onClick}) => {
  const [currStep, setCurrStep] = useContext(BtnContext);

  return (
    <>
        <button type={currStep === 1 ? "submit" : "button"} onClick={onClick} className="mx-auto px-5 py-3 bg-sky-800 text-white font-semi-bold rounded-md">{children}</button>
    </>
  )
}

export default Buttons