import { HashRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Social from "./pages/Social";

export default function AppRoutes() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sobre" element={<About />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </HashRouter>
  );
}
