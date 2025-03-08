import React from "react";
import helpdeskLogo from "../assets/fond.jpeg"; // Vérifie le chemin du logo

const Competences = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Conteneur principal avec fond bleu */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-4/5 flex flex-col items-center">

                {/* Logo IT Helpdesk */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-32 mb-4 rounded-lg shadow-lg" />

                {/* Titre */}
                <h2 className="text-2xl font-bold mb-6">Compétences Techniques</h2>

                {/* Section en 2 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                    {/* Colonne 1 */}
                    <div className="space-y-6">
                        {/* Systèmes d'exploitation et Virtualisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                💻 Systèmes d'exploitation et Virtualisation
                            </h3>
                            <ul className="pl-6 list-disc text-sm">
                                <li>Windows Server (Installation et administration en environnement virtualisé)</li>
                                <li>Debian Linux (Gestion de services réseau et sécurité)</li>
                                <li>Docker Conteneur</li>
                                <li>VMware Workstation / VirtualBox / KVM</li>
                            </ul>
                        </div>

                        {/* Administration Systèmes et Réseaux */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🌐 Administration Systèmes et Réseaux
                            </h3>
                            <ul className="pl-6 list-disc text-sm">
                                <li>Active Directory & DNS (Gestion des utilisateurs, permissions et services réseau)</li>
                                <li>Pare-feu et Sécurité Réseau</li>
                                <li>Protocoles Réseau (TCP/IP, DHCP, VLAN, VPN, SSH, RDP, SMB)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Colonne 2 */}
                    <div className="space-y-6">
                        {/* Développement et Automatisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🛠️ Développement et Automatisation
                            </h3>
                            <ul className="pl-6 list-disc text-sm">
                                <li>PowerShell & Bash (Scripts d'automatisation et gestion de serveurs)</li>
                                <li>HTML, CSS, JavaScript (Développement de solutions web)</li>
                            </ul>
                        </div>

                        {/* Supervision et Monitoring */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                📊 Supervision et Monitoring
                            </h3>
                            <ul className="pl-6 list-disc text-sm">
                                <li>Zabbix / Nagios (Surveillance d’infrastructures et alertes systèmes)</li>
                                <li>Wireshark (Analyse de trafic réseau)</li>
                                <li>Fail2Ban (Sécurisation et protection contre les attaques réseau)</li>
                            </ul>
                        </div>

                        {/* Cybersécurité et Pentesting */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🔒 Cybersécurité et Pentesting
                            </h3>
                            <ul className="pl-6 list-disc text-sm">
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
