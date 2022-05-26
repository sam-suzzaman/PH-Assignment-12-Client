import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import PurchagePage from "./Pages/PurchagePage";
import AllTools from "./Pages/AllTools";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/purchage" element={<PurchagePage />} />
                <Route path="/allTools" element={<AllTools />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
