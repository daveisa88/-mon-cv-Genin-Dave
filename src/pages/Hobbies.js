import React from "react";
import helpdeskLogo from "../assets/fond.jpeg";
import bayernLogo from "../assets/bayern.png";

const Hobbies = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Conteneur principal avec fond bleu */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-[450px] flex flex-col items-center">

                {/* Logo IT Helpdesk */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-md" />

                {/* Titre */}
                <h2 className="text-2xl font-bold mb-4">Hobbies</h2>

                {/* Liste des Hobbies */}
                <ul className="text-left w-full">
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
