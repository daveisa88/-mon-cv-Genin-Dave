import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // ✅ Importation d'Analytics
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import LettreMotivation from "./pages/LettreMotivation";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Documents from "./pages/Documents";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center relative">
                {/* Image de fond */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                    style={{ backgroundImage: "url('/background.jpg')" }}
                ></div>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Profile />
                            <Navigation />
                        </>
                    } />
                    <Route path="/lettre" element={<LettreMotivation />} />
                    <Route path="/competences" element={<Competences />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>

                {/* ✅ Vercel Analytics */}
                <Analytics />
            </div>
        </Router>
    );
}

export default App;
