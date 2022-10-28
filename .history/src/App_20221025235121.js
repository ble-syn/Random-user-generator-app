import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import { Navbar } from "../src/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="policy" element={<Policy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
