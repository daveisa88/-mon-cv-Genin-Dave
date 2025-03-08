import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="bg-gray-200 py-4 px-6 flex flex-wrap justify-center gap-4 mt-6 shadow-lg w-3/4 rounded-lg bg-opacity-80 backdrop-blur-md">
            {[
                { path: "/lettre", label: "📄 Lettre de Motivation" },
                { path: "/experience", label: "🛠 Expérience" },
                { path: "/competences", label: "💡 Compétences" },
                { path: "/hobbies", label: "🎮 Hobbies" },
                { path: "/documents", label: "📂 Documents" },
                { path: "/contact", label: "📞 Contact" }
            ].map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className="bg-blue-500 px-5 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;

