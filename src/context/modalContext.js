import { useContext, createContext, useState } from "react";

export function useModal(){
  return useContext(ModalContext);
}

const ModalContext = createContext({});

export function ModalProvider({children}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenUserUpdate, setModalIsOpenUserUpdate] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openModalUserUpdate = () => setModalIsOpenUserUpdate(true);
  const closeModalUserUpdate = () => setModalIsOpenUserUpdate(false);

  return(
    <ModalContext.Provider value={{modalIsOpenUserUpdate, modalIsOpen, openModal, closeModal, openModalUserUpdate, closeModalUserUpdate}}>
      {children}
    </ModalContext.Provider>
  )
}