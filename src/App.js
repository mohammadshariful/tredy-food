import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Info from "./pages/External/Info/Info";
import Home from "./pages/Home/Home/Home";
import MainNavbar from "./pages/Shared/Navbar/Navbar";
import TopNotify from "./pages/Shared/TopNotify/TopNotify";
function App() {
  return (
    <>
      <TopNotify />
      <Info />
      <MainNavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
