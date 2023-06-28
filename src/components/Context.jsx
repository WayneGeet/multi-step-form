import {useState, createContext} from 'react';

export const BtnContext = createContext();
export const FormContext = createContext();

export const BtnProvider =  ({children}) => {
    const [currStep, setCurrStep] = useState(1)
    return(
        <BtnContext.Provider value={[currStep, setCurrStep]}>
            {children}
        </BtnContext.Provider>
    )
};

export const FormProvider = ({children}) => {
    const [yup, setYup] = useState(null);
    return (
        <FormContext.Provider value={[yup, setYup]}>
            {children}
        </FormContext.Provider>
    )
}