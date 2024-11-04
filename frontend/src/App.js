import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import SingIn from "./pages/SingIn.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Footer from "./components/Footer.jsx";

import "./assets/styles/index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
