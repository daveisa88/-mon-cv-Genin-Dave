import React from "react";
import { useNavigate } from "react-router-dom";
import logoKali from "../assets/logo-kali.png";
import logoVmware from "../assets/logo-vmware.png";
import logoPfsense from "../assets/logo-pfsense.png";
import logoAd from "../assets/logo-ad.png";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto text-white relative">
      {/* Bouton de fermeture */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 text-3xl font-bold text-white hover:text-red-500"
        title="Fermer"
      >
        ✖
      </button>

      <h1 className="text-3xl font-bold text-blue-300 mb-6 text-center">
        🧠 Portfolio Cybersécurité & Réseaux
      </h1>

      {/* Audit de sécurité Web */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-blue-200 mb-2">🔍 Audit de Sécurité Web</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
          <li>Identification de plugins WordPress vulnérables (LFI, XSS, etc.)</li>
          <li>Utilisation d’outils comme WPScan, Nmap, WhatWeb, Dirsearch</li>
          <li>Rédaction de rapport PDF professionnel</li>
        </ul>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Reconnaissance passive */}
          <div className="bg-black text-green-400 font-mono p-4 rounded-lg text-sm flex-1 overflow-auto">
            <p className="text-blue-400"># 🔎 Reconnaissance passive</p>
            <p>whois target.com</p>
            <p>dig target.com +short</p>
            <p>whatweb https://target.com</p>
            <p>wpscan --url https://target.com --enumerate p</p>
            <p>curl -I https://target.com</p>
            <p>nslookup target.com</p>
            <p>theHarvester -d target.com -b all</p>
            <p>amass enum -d target.com</p>
          </div>

          {/* Scan actif */}
          <div className="bg-black text-green-400 font-mono p-4 rounded-lg text-sm flex-1 overflow-auto">
            <p className="text-red-400"># 🔥 Scan actif</p>
            <p>nmap -A -Pn -p- target.com</p>
            <p>dirsearch -u https://target.com -e php,html</p>
            <p>gobuster dir -u https://target.com -w /usr/share/wordlists/dirb/common.txt</p>
            <p>nikto -h https://target.com</p>
            <p>ffuf -u https://target.com/FUZZ -w wordlist.txt</p>
            <p>wpscan --url https://target.com --api-token=XXXX</p>
            <p>sqlmap -u "https://target.com/page.php?id=1" --batch</p>
          </div>
        </div>
      </div>

      {/* Mini-Lab Réseaux */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-green-300 mb-2">🧪 Mini-Lab Réseaux & Cybersécurité</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
          <li>Topologie virtuelle avec routeur, pare-feu, machine Windows/Linux</li>
          <li>AD simulé (authentification, GPO, DNS, DHCP)</li>
          <li>
            Surveillance : <strong>Suricata</strong>, <strong>Wazuh</strong>, <strong>Wireshark</strong>
          </li>
          <li>Tests d’intrusion, brute force, filtrage</li>
          <li>Documentation claire : schémas, captures, explications</li>
        </ul>

        {/* Logos outils */}
        <div className="flex justify-center items-center gap-6 mt-4 flex-wrap">
          <img src={logoKali} alt="Kali Linux" className="w-20 h-20 object-contain" />
          <img src={logoVmware} alt="VMware" className="w-20 h-20 object-contain" />
          <img src={logoPfsense} alt="pfSense" className="w-20 h-20 object-contain" />
          <img src={logoAd} alt="Active Directory" className="w-20 h-20 object-contain" />
        </div>

        {/* Capture ou Vidéo */}
        <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700 mt-6">
          <p className="text-gray-400 mb-2">📸 Capture ou vidéo de la topologie réseau</p>
          <div className="w-full flex justify-center">
            <video
              controls
              className="rounded-md border border-gray-600 max-h-80"
            >
              <source src="/videos/Enregistrement-2025-03-28-041531.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </div>

      {/* Liens externes */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://github.com/daveisa88"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
        >
          🐙 GitHub
        </a>
        <a
          href="https://start.me/p/m6bmN4/bureau"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
        >
          🔗 StartMe
        </a>
        <a
          href="https://www.pearltrees.com/kalidave88"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
        >
          📁 Veille Informatique
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
