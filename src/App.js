import React from "react";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Lista from "./Pages/Lista";
import Calculadora from "./Pages/Calculadora";
import Densidade from "./Pages/Densidade";
import Receitas from "./Pages/Receitas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/lista" element = {<Lista/>}></Route>
          <Route path="/calculadora" element = {<Calculadora/>}></Route>
          <Route path="/densidade" element = {<Densidade/>}></Route>
          <Route path="/receitas" element = {<Receitas/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
