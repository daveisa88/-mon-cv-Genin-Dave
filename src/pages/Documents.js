import React from "react";
import helpdeskLogo from "../assets/fond.jpeg"; // Vérifie que le fichier est bien présent dans /src/assets/

const Documents = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Conteneur principal en bleu */}
            <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">

                {/* Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-lg" />

                {/* Titre */}
                <h2 className="text-2xl font-bold mb-4">Documents à Télécharger</h2>

                {/* Bouton d'accès aux documents */}
                <a href="https://drive.google.com/drive/folders/1CkuNFKXCGiqqGU1o9GR3ggpcZdtCcW-s?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                        📄 Accéder aux Documents
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Documents;
