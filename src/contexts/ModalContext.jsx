import React from "react";

const ModalContext = React.createContext();

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const AppContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
