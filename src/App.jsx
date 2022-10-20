import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Main_features from "./main/Main_features";
import Main_contact from "./main/contact/Main_contact";
import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Header />
         
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/features" element={<Main_features />} />
            <Route path="/contact" element={<Main_contact />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
