import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components here
import Home from "./components/Home";
import HeaderComp from "./components/HeaderComp";
import Surveys from "./components/Surveys";
import Information from "./components/Information";

//styles here

import "./style/App.css";

function App() {
  return (
    <>
      <Router>
        <HeaderComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/surveys" element={<Surveys />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
