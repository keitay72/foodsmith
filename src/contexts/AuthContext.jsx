import React from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  // This state shows the "IngredientSearchModal" when true
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
