import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/whole.css";
import "./css/font.css";
import Header from "./components/Template/Header";
import Footer from "./components/Template/Footer";
import Main from "./components/Template/Main";
import Develop from "./components/Template/Develop";
import DevelopDetail from "./components/Template/DevelopDetail";
import ScrollToTop from "./components/Atom/ScrollTop";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Develop" element={<Develop />}/>
          <Route path="/Develop/:DevelopDetail" element={<DevelopDetail />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
