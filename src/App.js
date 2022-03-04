import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/auth";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Test from "./pages/Test";

//Attraction Pages
// import Seaside from "./pages/Seaside";
// import Six from "./pages/Six";
// import Atlantic from "./pages/Atlantic";
// import Pnc from "./pages/Pnc";
// import Prudential from "./pages/Prudential";
 import Park from "./pages/Park";
// import Liberty from "./pages/Liberty";
// import Gardens from "./pages/Gardens";
// import Mall from "./pages/Mall";
// import Princeton from "./pages/Princeton";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />

          {/* <Route path="/seaside" element={<Seaside />} />
          <Route path="/six" element={<Six />} />
          <Route path="/atlantic" element={<Atlantic />} />
          <Route path="/pnc" element={<Pnc />} />
          <Route path="/prudential" element={<Prudential />} /> */}
          <Route path="/park" element={<Park />} />
          {/* <Route path="/liberty" element={<Liberty />} />
          <Route path="/gardens" element={<Gardens />} />
          <Route path="/mall" element={<Mall />} />
          <Route path="/princeton" element={<Princeton />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;