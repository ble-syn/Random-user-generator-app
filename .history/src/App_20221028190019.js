import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Vision";
import Terms from "./pages/Mission";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="policy" element={<Mission />} />
            <Route path="terms" element={<Vision />} />
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
