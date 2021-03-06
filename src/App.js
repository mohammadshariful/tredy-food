import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Info from "./pages/External/Info/Info";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer/Footer";
import MainNavbar from "./pages/Shared/Navbar/Navbar";
import TopNotify from "./pages/Shared/TopNotify/TopNotify";
function App() {
  return (
    <>
      <TopNotify />
      <Info />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
