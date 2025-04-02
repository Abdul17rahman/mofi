import { Routes, Route } from "react-router-dom";
import Compare from "./screens/Compare";
import Home from "./screens/Home";
import Layout from "./screens/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="compare" element={<Compare />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
