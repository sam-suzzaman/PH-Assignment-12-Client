import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import AllTools from "./Pages/AllTools";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase";
import Blogs from "./Pages/Blogs";
import Portfolio from "./Pages/Portfolio";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allTools" element={<AllTools />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route
                    path="/order/:orderId"
                    element={
                        <RequireAuth>
                            <Purchase />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
