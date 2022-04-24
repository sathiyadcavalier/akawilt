import './App.css';
import Layout from './Pages/layout';
import Home from './Pages/home';
import Aboutme from "./Pages/aboutme"
import Experiments from "../src/Pages/experiments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import '@popperjs/core'; // Edit here


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="experiments" element={<Experiments />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
