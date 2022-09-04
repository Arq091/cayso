import Nav from "./components/Nav";
import Home from "./pages/Home";
import Tracks from "./pages/Tracks";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import About from "./pages/About";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const padding = {
  paddingInline: "max(min(20rem, calc((100% - 1024px) / 2)), 20px)",
  paddingBlock: "2.281rem",
};

function App() {
  function formatString(string) {
    string = string.slice(1);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const location = useLocation();

  if (location.pathname != "/thanks") {
    useEffect(() => {
      let title;
      if (location.pathname == "/") {
        title = "Home";
      } else {
        title = formatString(location.pathname);
      }
      document.title = "Cayso | " + title;
    });
  }

  return (
    <div className="font-sans">
      <Nav />
      <section style={padding}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
