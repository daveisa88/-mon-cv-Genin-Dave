import React from "react";
import helpdeskLogo from "../assets/fond.jpeg";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Conteneur principal avec fond bleu */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-[600px] flex flex-col items-center">

                {/* Logo IT Helpdesk */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-4 rounded-lg shadow-md" />

                {/* Titre */}
                <h2 className="text-2xl font-bold mb-4">Expérience Professionnelle</h2>

                {/* Liste des Expériences */}
                <ul className="text-left w-full space-y-6">
                    <li className="border-b border-blue-600 pb-4">
                        <span className="font-extrabold text-lg">📌 Gaea21 - IT Helpdesk & Développement (Novembre 2023 - Aujourd'hui)</span>
                        <ul className="ml-6 list-disc text-sm text-gray-200">
                            <li>Assistance et support IT à distance</li>
                            <li>Administration Google Workspace et gestion des outils collaboratifs</li>
                            <li>Développement et maintenance d’outils internes (HTML, Java, PHP sur Google Cloud, Firebase)</li>
                        </ul>
                    </li>

                    <li className="border-b border-blue-600 pb-4">
                        <span className="font-extrabold text-lg">📌 MiniLabs Personnels - Administration Systèmes & Réseaux</span>
                        <ul className="ml-6 list-disc text-sm text-gray-200">
                            <li>Mise en place d’un environnement Active Directory en virtualisation</li>
                            <li>Administration de serveurs Windows et Linux pour divers scénarios professionnels</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-extrabold text-lg">📌 Garrett SA - Opérateur Régleur Ligne Automatisée (1999 - 2023)</span>
                        <ul className="ml-6 list-disc text-sm text-gray-200">
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
