import React from "react";

const ModalContext = React.createContext();

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, showLogin, setShowLogin }}>
      {children}
    </ModalContext.Provider>
  );
};
