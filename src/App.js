import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Saludos Terricola!" />
    </div>
  );
}

export default App;
