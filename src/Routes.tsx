import { HashRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";

export default function AppRoutes() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sobre" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
