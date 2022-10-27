import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/whole.css";
import "./css/font.css";
import Header from "./component/Template/Header";
import Footer from "./component/Template/Footer";
import Main from "./component/Template/Main";
import Develop from "./component/Template/Develop";
import DevelopDetail from "./component/Template/DevelopDetail";
import ScrollToTop from "./component/Atom/ScrollTop";

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
