import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Experience = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
           <div className="bg-black text-green-400 p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto border border-green-700">


                {/* Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-40 mb-6 rounded-lg shadow-md" />

                {/* À propos */}
                <h2 className="text-xl font-bold mb-2">🧠 À propos</h2>
                <p className="text-sm text-gray-200 text-center mb-6">
                    Administrateur Systèmes & Réseaux spécialisé en environnements Windows & Linux, avec 2 ans d’expérience en support IT, Google Workspace et développement web. <br />
                    Autonome, rigoureux et en veille constante, je renforce mes compétences en cybersécurité offensive via des audits techniques, labos personnels, et tests de pénétration.
                </p>

                {/* Projets & Réalisations */}
                <h2 className="text-xl font-bold mb-2">🔍 Projets & Réalisations</h2>
                <ul className="list-disc text-sm text-gray-200 ml-6 mb-6">
                    <li><strong>✅ Audit de Sécurité – CHU :</strong> Analyse passive et semi-active, détection de failles (LFI, élévation), rapport de recommandations.</li>
                    <li><strong>✅ Lab personnel (Mini-SOC & Pentest) :</strong> Active Directory virtualisé, détection d’attaques (Wazuh, Snort, Suricata), durcissement système.</li>
                </ul>

                {/* Expérience */}
                <h2 className="text-xl font-bold mb-4">💼 Expérience Professionnelle</h2>
                <ul className="text-left w-full space-y-8 px-4">
                    {/* Circet */}
                    <li className="border-b border-blue-600 pb-4">
                        <div className="flex justify-between items-center gap-4 mt-4">
                            <span className="font-extrabold text-lg">📊 Circet – KPI Data Analyst</span>
                            <span className="text-sm opacity-80 flex-shrink-0">(Mars 2025 – Aujourd’hui)</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-200">
                            Actuellement KPI Data Analyst chez Circet (mars 2025 – aujourd’hui), j’opère dans un environnement Microsoft 365
                            (Power Apps, Power Automate, SharePoint/OneDrive) interfacé à une passerelle On-premises Data Gateway (mode standard)
                            pour automatiser l’ingestion d’exports JSON et leur synchronisation vers Power BI. Je conçois et maintiens des flux
                            de bout en bout (contrôles, journalisation, alerting), des modèles de données et des tableaux de bord opérationnels
                            (avancement des équipes terrain, PROD/SAV, indicateurs de GTR).
                        </p>
                    </li>

                    <li className="border-b border-blue-600 pb-4">
                        <div className="flex justify-between items-center gap-4 mt-4">
                            <span className="font-extrabold text-lg">🖥️ Gaea21 - IT Helpdesk & Développement</span>
                            <span className="text-sm opacity-80 flex-shrink-0">(Nov. 2023 - Aujourd’hui)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>Support IT utilisateur (N1/N2), résolution d’incidents</li>
                            <li>Administration Google Workspace : sécurité, comptes, apps</li>
                            <li>Développement d’outils internes (HTML, PHP, Java sur Firebase)</li>
                        </ul>
                    </li>

                    <li className="border-b border-blue-600 pb-4">
                        <div className="flex justify-between items-center gap-4 mt-4">
                            <span className="font-extrabold text-lg">🔧 MiniLabs Personnels – Systèmes & Pentest</span>
                            <span className="text-sm opacity-80 flex-shrink-0">(2022 – Aujourd’hui)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>Déploiement de scénarios de sécurité (attaque/défense)</li>
                            <li>Utilisation d’outils open source : pfSense, Zabbix, Suricata</li>
                            <li>Documentation technique : topologie, sécurité, procédures</li>
                        </ul>
                    </li>

                    <li>
                        <div className="flex justify-between items-center gap-4">
                            <span className="font-extrabold text-lg">🏭 Garrett SA - Opérateur Régleur</span>
                            <span className="text-sm opacity-80 flex-shrink-0">(1999 - 2023)</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm text-gray-200 mt-4">
                            <li>Programmation et réglage de machines automatisées</li>
                            <li>Maintenance préventive et corrective</li>
                            <li>Optimisation continue des lignes de production</li>
                        </ul>
                    </li>
                </ul>


                {/* Formations */}
                <h2 className="text-xl font-bold mt-8 mb-2">📚 Formations & Certifications</h2>
                <ul className="list-disc text-sm text-gray-200 ml-6">
                    <li>🔐 TryHackMe / HackTheBox (progression régulière)</li>
                    <li>🎓 Formation cybersécurité (labs, writeups, CVEs)</li>
                    <li>📜 Certification Google Workspace Admin (en cours)</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
