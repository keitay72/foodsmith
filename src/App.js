import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Navbar />
      <Search showModal={showModal} handleModal={handleModal} />
    </div>
  );
}

export default App;
