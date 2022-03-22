import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { AppContextProvider } from "./contexts/ModalContext";

function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <Search />
    </AppContextProvider>
  );
}

export default App;
