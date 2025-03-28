import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Documents = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 overflow-auto">
            <div className="bg-black text-green-400 p-8 rounded-lg shadow-lg w-4/5 md:w-2/4 flex flex-col items-center relative max-h-[90vh] overflow-auto border border-green-700">
                
                {/* Bouton fermeture */}
                <button
                    className="absolute top-4 right-4 text-green-500 text-3xl font-bold hover:text-red-600"
                    onClick={() => navigate(-1)}
                >
                    ✖
                </button>

                {/* Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-md" />

                {/* Titre */}
                <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">📁 Documents à Télécharger</h2>

                {/* Bouton */}
                <a
                    href="https://www.dropbox.com/scl/fo/y98htql9gz2ijccp6fq7o/ANv3T3E0q73CkO-klz2CCbA?rlkey=1myl9qe2faaq3d740jrjj54vp&st=ozvs01jz&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <button className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 transition duration-300">
                        📄 Accéder aux Documents
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Documents;
