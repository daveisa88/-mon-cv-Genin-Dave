import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HackerHome from "./components/HackerHome";
import LettreMotivation from "./pages/LettreMotivation";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Documents from "./pages/Documents";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center relative">
                {/* Image de fond (tu peux la changer) */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                    style={{ backgroundImage: "url('/background.jpg')" }}
                ></div>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <HackerHome />
                            <SpeedInsights />
                        </>
                    } />
                    <Route path="/lettre" element={<LettreMotivation />} />
                    <Route path="/competences" element={<Competences />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

