import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <Navbar />
        <Search />
      </ModalContextProvider>
    </div>
  );
}

export default App;
