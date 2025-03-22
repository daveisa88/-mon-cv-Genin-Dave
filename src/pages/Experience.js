import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Experience = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* ✅ Conteneur principal élargi */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-[750px] flex flex-col items-center relative max-h-[90vh] overflow-auto">

                {/* ✅ Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* ✅ Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-6 rounded-lg shadow-md" />

                {/* ✅ Titre principal */}
                <h2 className="text-2xl font-bold mb-4">Expérience Professionnelle</h2>

                {/* ✅ Liste des Expériences avec espacements */}
                <ul className="text-left w-full space-y-8 overflow-auto max-h-[70vh] px-4">
                    <li className="border-b border-blue-600 pb-4">
                        {/* ✅ Flexbox pour aligner le titre et la date avec un espace */}
                        <div className="flex justify-between items-center gap-4 mt-4 ">
                            <span className="font-extrabold text-lg ">🖥️ Gaea21 - IT Helpdesk & Développement</span>
                            <span className="text-sm opacity-80 flex-shrink-0 mt-2 ">(Novembre 2023 - Aujourd'hui)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>
                                Support utilisateurs en tant que <strong>technicien helpdesk</strong> : assistance reseaux, résolution d’incidents techniques matériels et logiciels.
                            </li>
                            <li>
                                <strong>Administration Google Workspace</strong> : gestion des comptes, sécurisation, maintenance et optimisation de l’environnement collaboratif.
                            </li>
                            <li>
                                Développement et maintenance d’outils internes sur <strong>Google Cloud</strong> et <strong>Firebase</strong> (HTML, Java, PHP).
                            </li>
                        </ul>

                    </li>

                    <li className="border-b border-blue-600 pb-4">
                        <div className="flex justify-between items-center gap-4 mt-4">
                            <span className="font-extrabold text-lg">🔧 MiniLabs Personnels - Administration Systèmes & Réseaux</span>
                            <span className="text-sm opacity-80 flex-shrink-0 ">(Projet Personnel)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>Mise en place d’un environnement Active Directory en virtualisation</li>
                            <li>Administration de serveurs Windows et Linux pour divers scénarios professionnels</li>
                        </ul>
                    </li>

                    <li>
                        <div className="flex justify-between items-center gap-4">
                            <span className="font-extrabold text-lg">🏭 Garrett SA - Opérateur Régleur Ligne Automatisée</span>
                            <span className="text-sm opacity-80 flex-shrink-0 mt-6">(1999 - 2023)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>Programmation et réglage des machines automatisées sur ligne de production</li>
                            <li>Maintenance préventive et corrective des équipements industriels</li>
                            <li>Optimisation des paramètres pour améliorer la productivité</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
