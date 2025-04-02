import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Compare from "./screens/Compare";
import Home from "./screens/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="compare" element={<Compare />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
