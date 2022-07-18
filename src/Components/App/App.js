import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "../../routes/about.js";
import Home from "../../routes/home.js";
import Navigation from "../../routes/navigation.js";
import Projects from "../../routes/projects.js";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="projects/" element={<Projects />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

/* 
Remove default scrollbar, it's very ugly on Windows.
Edit navbar formatting or routing structure.
*/
