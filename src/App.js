import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import { Poke } from "./ejemplos/Poke/Poke";

function App() {


  return (
    <>
      <NavBar/>
      <Poke/>
      {/* <ItemListContainer/> */}
    </>
  
  );
}

export default App;
