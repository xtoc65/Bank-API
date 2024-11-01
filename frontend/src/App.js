import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home.jsx";

import "./assets/styles/index.css";
import Header from "./components/Header.jsx";


function App() {
  return (
    <Router> 
      <Header />
      <Home />
    </Router>
  );
}

export default App;
