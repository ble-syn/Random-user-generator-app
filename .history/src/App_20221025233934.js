import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./Policy";
import Terms from "./Terms";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="container">
      <Router>
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
