import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 w-[400px] mx-auto mt-4">
            <nav className="flex flex-wrap justify-center gap-4">
                {[
                    { path: "/contact", label: "📍 Coordonnées" }, // Coordonnées en premier
                    { path: "/lettre", label: "📄 Lettre de Motivation" },
                    { path: "/experience", label: "🛠 Expérience" },
                    { path: "/competences", label: "💡 Compétences" },
                    { path: "/hobbies", label: "🎮 Hobbies" },
                    { path: "/documents", label: "📂 Documents" },
                    { path: "/contact", label: "📞 Contact" } // Contact reste ici
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="bg-blue-500 px-6 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 w-full text-center"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navigation;
