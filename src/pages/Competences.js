import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Competences = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* Conteneur principal */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto">

                {/* ✅ Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* ✅ Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-32 mb-4 rounded-lg shadow-lg" />

                {/* ✅ Titre principal */}
                <h2 className="text-2xl font-bold mb-6">Compétences Techniques</h2>

                {/* ✅ Contenu avec défilement activé */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full overflow-auto max-h-[70vh] px-4">

                    {/* 🔹 Colonne 1 */}
                    <div className="space-y-6">
                        {/* Systèmes d'exploitation et Virtualisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                💻 Systèmes d'exploitation et Virtualisation <span className="text-yellow-400 ml-2 ">★★★☆☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Windows Server (Installation et administration en environnement virtualisé)</li>
                                <li>Debian Linux (Gestion de services réseau et sécurité)</li>
                                <li>Docker Conteneur</li>
                                <li>VMware Workstation / VirtualBox / KVM</li>
                            </ul>

                        </div>

                        {/* Administration Systèmes et Réseaux */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🌐 Administration Systèmes et Réseaux <span className="text-yellow-400 ml-2 ">★★★☆☆</span> 
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Active Directory & DNS (Gestion des utilisateurs, permissions et services réseau)</li>
                                <li>Pare-feu et Sécurité Réseau</li>
                                <li>Protocoles Réseau (TCP/IP, DHCP, VLAN, VPN, SSH, RDP, SMB)</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Colonne 2 */}
                    <div className="space-y-6">
                        {/* Développement et Automatisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🛠️ Développement et Automatisation <span className="text-yellow-400 ml-2 ">★★★☆☆</span> 
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4 ">
                                <li>PowerShell & Bash (Scripts d'automatisation et gestion de serveurs)</li>
                                <li>HTML, CSS, JavaScript (Développement de solutions web)</li>
                            </ul>
                        </div>

                        {/* Supervision et Monitoring */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                📊 Supervision et Monitoring <span className="text-yellow-400 ml-2">★★★☆☆</span>

                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Zabbix / Nagios (Surveillance d’infrastructures et alertes systèmes)</li>
                                <li>Wireshark (Analyse de trafic réseau)</li>
                                <li>Fail2Ban (Sécurisation et protection contre les attaques réseau)</li>
                            </ul>
                        </div>

                        {/* Cybersécurité et Pentesting */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🔒 Cybersécurité et Pentesting <span className="text-yellow-400 ml-2">★★★★☆</span> 
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Tests d’intrusion (Nmap, Metasploit, Gobuster)</li>
                                <li>OSINT et Analyse Forensique (Collecte d'informations et investigation numérique)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competences;
