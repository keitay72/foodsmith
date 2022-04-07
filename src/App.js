import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { ModalContextProvider } from "./contexts/ModalContext";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Navbar />
        <Search />
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
