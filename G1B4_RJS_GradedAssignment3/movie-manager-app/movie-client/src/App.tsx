// import libraries
import React from "react";
import { ToastContainer } from "react-toastify";
// import files
import "./App.css";
import Header from "./components/header/header";

// The header component consists of all the remaining components
// ToastContainer used to display the notifications regarding addition and removal of favourites
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
    </div>
  );
}

export default App;
