import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import MainBody from "./components/MainBody/MainBody";
import { ModalContextProvider } from "./contexts/ModalContext";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Navbar />
        <Search />
        <MainBody />
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
