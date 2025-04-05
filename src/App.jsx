import { Routes, Route } from "react-router-dom";
import Compare from "./screens/Compare";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Notfound from "./screens/Notfound";
import MovieDetail from "./screens/MovieDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="compare" element={<Compare />} />
          <Route path="moviedetail/:id" element={<MovieDetail />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
