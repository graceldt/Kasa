import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./routes/about";
import Accommodation from "./routes/accommodation";
import Home from "./routes/home";
import PageNotFound from "./routes/error-page";
import Footer from "../src/components/footer";
import Header from "../src/components/header";

const App = () => {
    return (
        <BrowserRouter>
            <div className="border-page">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;