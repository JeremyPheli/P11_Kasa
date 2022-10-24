import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Location from "./pages/Location";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Location" element={<Location />} />
        {/* Si l'utilisateur cherche un URL qui n'existe pas, on renvoit vers une page d'erreur 404  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
