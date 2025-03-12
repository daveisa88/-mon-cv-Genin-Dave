import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";
import bayernLogo from "../assets/bayern.png";

const Hobbies = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* Conteneur principal */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-[450px] flex flex-col items-center relative max-h-[90vh] overflow-auto">

                {/* ✅ Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* ✅ Logo IT Helpdesk */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-md" />

                {/* ✅ Titre principal */}
                <h2 className="text-2xl font-bold mb-4">Hobbies</h2>

                {/* ✅ Liste des Hobbies avec séparateurs */}
                <ul className="text-left w-full overflow-auto max-h-[70vh] px-4">
                    <li className="flex items-center gap-2 border-b border-blue-600 py-3">
                        🔹 <span>Participation à des challenges de cybersécurité (<a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Hack The Box</a>)</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-blue-600 py-3">
                        🖨️ <span>Impression 3D et conception de prototypes</span>
                    </li>
                    <li className="flex items-center gap-2 border-b border-blue-600 py-3">
                        ⚽ <span>Football - Supporter du Bayern Munich</span>
                        <img src={bayernLogo} alt="Logo Bayern Munich" className="w-8 h-8" />
                    </li>
                    <li className="flex items-center gap-2 border-b border-blue-600 py-3">
                        🎮 <span>Création de bornes arcade sur Raspberry Pi</span>
                    </li>
                    <li className="flex items-center gap-2 py-3">
                        🔧 <span>Bricolage et projets DIY</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;

