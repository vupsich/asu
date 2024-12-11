import React from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import ImageSection from "./components/ImageSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <ImageSection />
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;