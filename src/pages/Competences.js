import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Competences = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
           <div className="bg-black text-green-400 p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto border border-green-700">


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
                        {/* Systèmes & Virtualisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🖥 Systèmes & Virtualisation <span className="text-yellow-400 ml-2">★★★☆☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Windows Server (AD, GPO, DNS, DHCP, RDS)</li>
                                <li>Linux (Debian/Ubuntu, services réseau, sécurité)</li>
                                <li>Virtualisation : KVM, VMware, VirtualBox</li>
                                <li>Docker (conteneurs, réseaux, volumes)</li>
                            </ul>
                        </div>

                        {/* Réseaux & Sécurité */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🌐 Réseaux & Sécurité <span className="text-yellow-400 ml-2">★★★☆☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Protocoles : TCP/IP, DNS, SSH, SMB, FTP, VPN, VLAN</li>
                                <li>Pare-feux : iptables, UFW / Fail2Ban</li>
                                <li>Analyse de trafic : Wireshark, tcpdump</li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Colonne 2 */}
                    <div className="space-y-6">
                        {/* Pentest & Cybersécurité */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                🛡 Pentest & Cybersécurité <span className="text-yellow-400 ml-2">★★★★☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Reconnaissance passive (WHOIS, DNS, stack)</li>
                                <li>Tests d’intrusion : Nmap, WPScan, Gobuster, Metasploit</li>
                                <li>OSINT, analyse de surface d’attaque</li>
                                <li>Vulnérabilités : XSS, LFI, IDOR, bruteforce</li>
                            </ul>
                        </div>

                        {/* Dev & Automatisation */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                💡 Dev & Automatisation <span className="text-yellow-400 ml-2">★★★☆☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>PowerShell, Bash (scripts d'automatisation)</li>
                                <li>HTML, CSS, JavaScript (outils web internes)</li>
                            </ul>
                        </div>

                        {/* Supervision & Monitoring */}
                        <div>
                            <h3 className="text-lg font-bold text-blue-300 flex items-center">
                                📊 Supervision & Monitoring <span className="text-yellow-400 ml-2">★★★☆☆</span>
                            </h3>
                            <ul className="pl-6 list-disc text-sm mt-4">
                                <li>Zabbix, Nagios, Grafana, Uptime Kuma</li>
                                <li>Wireshark / tcpdump (analyse réseau)</li>
                                <li>Fail2Ban (protection contre attaques)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competences;
