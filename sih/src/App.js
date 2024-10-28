import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Check from './pages/check'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/check" element={<Check/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
