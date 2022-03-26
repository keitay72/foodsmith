import React from "react";

const ModalContext = React.createContext();

export const useModal = () => {
  return React.useContext(ModalContext);
};

export const ModalContextProvider = ({ children }) => {
  // This state shows the "IngredientSearchModal" when true
  const [showModal, setShowModal] = React.useState(false);

  // This state shows the login modal when true
  const [showLogin, setShowLogin] = React.useState(false);

  // This state shows the signup modal when true and showLogin state is true
  const [showSignup, setShowSignup] = React.useState(false);

  // This state is to store the form data from the signup form modal
  const [signupFormData, setSignupFormData] = React.useState({});

  // This state is to store the form data from the login form modal
  const [loginFormData, setLoginFormData] = React.useState({});

  const toggleLoginSignupModalStatesToFalse = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  // Function handlLogin is to grab the login form data and set it to the loginFormData state
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target.children;

    setLoginFormData((prevState) => ({
      ...prevState,
      username: form.username.value,
      password: form.password.value,
    }));

    setShowLogin(false);
  };

  // Function handleLoginSignupSwitch toggles state to detemine whether the login form or the signup form with display inside the active "LoginSignupModal"
  const handleLoginSignupSwitch = () => {
    setShowSignup((prevState) => !prevState);
  };

  // Function handleSignup is to grab the signup form data and set it to the signupFormData state
  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target.children;

    setSignupFormData((prevState) => ({
      ...prevState,
      firstName: form["first-name"].value,
      lastName: form["last-name"].value,
      userame: form.username.value,
      email: form.email.value,
      phoneNumber: form["phone-number"].value,
      password: form.password.value,
      confirmPassword: form["confirm-password"].value,
    }));

    setShowLogin(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        showLogin,
        setShowLogin,
        signupFormData,
        setSignupFormData,
        toggleLoginSignupModalStatesToFalse,
        handleSignup,
        showSignup,
        setShowSignup,
        loginFormData,
        setLoginFormData,
        handleLogin,
        handleLoginSignupSwitch,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
