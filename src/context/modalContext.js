import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [elementName, setElementName] = useState('');

  const clickHandler = event => {
    setIsOpen(!isOpen);
    if(event?.target.innerText === 'Delete') {
      console.log(event.target.innerText)
      return setElementName(event.target.innerText);
    }
    setElementName('');
  }

  return (
    <ModalContext.Provider value={{ isOpen, clickHandler, elementName, setElementName }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
