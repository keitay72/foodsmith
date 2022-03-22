import React from "react";

const ModalContext = React.createContext();
const ModalUpdateContext = React.createContext();

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const useModalUpdate = () => {
  return React.useContext(ModalUpdateContext);
};

export const AppContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider value={showModal}>
      <ModalUpdateContext.Provider value={handleModal}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
};
