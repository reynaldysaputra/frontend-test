import { useContext, createContext, useState } from "react";

export function useModal(){
  return useContext(ModalContext);
}

const ModalContext = createContext({});

export function ModalProvider({children}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return(
    <ModalContext.Provider value={{modalIsOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  )
}