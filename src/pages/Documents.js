import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Documents = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* Conteneur principal */}
            <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center relative max-h-[90vh] overflow-auto">

                {/* ✅ Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* ✅ Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-lg" />

                {/* ✅ Titre principal */}
                <h2 className="text-2xl font-bold mb-4 text-center">Documents à Télécharger</h2>

                {/* ✅ Bouton d'accès aux documents */}
                <a href="https://www.dropbox.com/scl/fo/y98htql9gz2ijccp6fq7o/ANv3T3E0q73CkO-klz2CCbA?rlkey=1myl9qe2faaq3d740jrjj54vp&st=ozvs01jz&dl=0"
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

