import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HackerHome = () => {
  const [countdown, setCountdown] = useState(null);
  const [exploded, setExploded] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [easterEggVisible, setEasterEggVisible] = useState(false);
  const [nsaImageVisible, setNsaImageVisible] = useState(false);

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance("supér génial ");
    msg.rate = 1.8;
    speechSynthesis.speak(msg);
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setExploded(true);
      const audio = new Audio("/sound/access-denied.mp3");
      audio.play();
      setTimeout(() => {
        setExploded(false);
        setCountdown(null);
        setTerminalOutput((prev) => [...prev, "⚠️ ACCESS DENIED"]);
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleCommand = (e) => {
    e.preventDefault();
    const input = terminalInput.trim().toLowerCase();
    let output = "";

    switch (input) {
      case "whoami":
        output = "Dave Genin";
        break;
      case "help":
        output = "[📁 Coordonnées, 📄 CV, 💼 Portfolio, 📞 Contact, ls, clear, h4ck, sudo rm -rf /]";
        break;
      case "clear":
        setTerminalOutput([]);
        setTerminalInput("");
        return;
      case "ls":
        output = `🎁 Jouets du Hacker :
- Kali Linux
- Wireshark
- Metasploit
- Nmap
- Burp Suite
- USB Rubber Ducky
- Flipper Zero
- Proxmark3
- Raspberry Pi Hacker Edition
- Caméra infrarouge
- VPN + Tails + Tor Browser`;
        break;
      case "hack":
        output = "🛡️ Connexion établie à l’intranet de la NSA...";
        setTerminalOutput((prev) => [...prev, `> ${input}`, output]);
        setTerminalInput("");
        setTimeout(() => {
          setNsaImageVisible(true);
          setTimeout(() => setNsaImageVisible(false), 8000);
        }, 2000);
        return;
      case "sudo rm -rf /":
        output = "💣 rm -rf / engagé... Système compromis. Redirection vers poste de contrôle.";
        setTerminalOutput((prev) => [...prev, `> ${input}`, output]);
        setTerminalInput("");

        const prankWindow = window.open("https://www.geektyper.com/scp3/", "_blank", "width=800,height=600");

        setTimeout(() => {
          if (prankWindow && !prankWindow.closed) prankWindow.close();

          setEasterEggVisible(true);

          const sound = new Audio("/sound/back-to-future-doc.mp3");
          sound.volume = 0.8;
          sound.play().catch((err) => console.warn("Audio error:", err));

          setTimeout(() => {
            setEasterEggVisible(false);
            sound.pause();
            sound.currentTime = 0;
          }, 10000);
        }, 5000);
        return;
     
      case "easter":
        output = "🥚 Bravo mais pas encore ";
        break;
      default:
        output = `⚠️ ACCESS DENIED : ${input}`;
    }

    setTerminalOutput((prev) => [...prev, `> ${input}`, output]);
    setTerminalInput("");
  };

  return (
    <div className={`min-h-screen relative text-green-400 font-mono p-6 flex flex-col items-center overflow-hidden ${exploded ? "bg-black text-white" : ""}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {exploded && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center flex-col z-50">
          <div className="text-red-600 text-[10rem] animate-pulse font-extrabold glitch-skull">
            ☠️
          </div>
          <div className="text-white text-6xl font-extrabold glitch-skull mt-4 text-center">
            ACCESS DENIED
          </div>
        </div>
      )}

      {easterEggVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 text-center px-4">
          <img src="/delorean.png" alt="Delorean" className="w-2/3 max-w-xl animate-fadeInUp" />
          <p className="text-green-400 text-xl mt-6">
            🥚 Bravo tu as trouvé un easter egg RH !<br />
            Dossier planqué au fond du placard retrouvé… supprimé 😈
          </p>
        </div>
      )}

      {nsaImageVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 text-center px-4">
          <img src="/nsa-alert.png" alt="NSA Alert" className="w-2/3 max-w-xl animate-fadeInUp" />
          <p className="text-red-400 text-xl mt-6">
            ⚠️ Tentative de traçage échouée. Tranquille mon pote.
          </p>
        </div>
      )}

      <div className="relative z-20 w-full">
        <div className="terminal-line z-30">root@dave:~$</div>

        <div className="bg-black p-20 rounded-md shadow-inner">
          <pre className="text-green-600 text-xs text-center leading-snug whitespace-pre-wrap max-w-full z-20 relative">
{`
██████╗░░█████╗░██╗░░░██╗███████╗  ░██████╗░███████╗███╗░░██╗██╗███╗░░██╗
██╔══██╗██╔══██╗██║░░░██║██╔════╝  ██╔════╝░██╔════╝████╗░██║██║████╗░██║
██║░░██║███████║╚██╗░██╔╝█████╗░░  ██║░░██╗░█████╗░░██╔██╗██║██║██╔██╗██║
██║░░██║██╔══██║░╚████╔╝░██╔══╝░░  ██║░░╚██╗██╔══╝░░██║╚████║██║██║╚████║
██████╔╝██║░░██║░░╚██╔╝░░███████╗  ╚██████╔╝███████╗██║░╚███║██║██║░╚███║
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝  ░╚═════╝░╚══════╝╚═╝░░╚══╝╚═╝╚═╝░░╚══╝
`}
          </pre>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-start">
          <div className="flex-1 bg-gray-900 border border-green-700 rounded-lg p-6 shadow-lg text-center z-20 relative">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-green-500 rounded overflow-hidden">
              <img src="/profile.jpg" alt="Dave Genin" className="w-full h-full object-cover" />
            </div>
            <div className="text-lg leading-tight mb-2">
              <span className="block text-2xl">T</span>
              <span className="text-sm">Technicien</span>
              <span className="block text-2xl">A</span>
              <span className="text-sm">Assistance</span>
              <span className="block text-2xl">I</span>
              <span className="text-sm">Informatique</span>
            </div>
            <p className="text-sm text-green-400 mt-2 italic">(Cybersécurité en entreprise)</p>

            <button onClick={() => setCountdown(5)} className="mt-4 btn-danger glitch" data-text="☠️ Activer l’autodestruction">
              ☠️ Activer l’autodestruction
            </button>

            {countdown !== null && !exploded && (
              <p className="mt-4 text-red-400 font-bold">
                Ce CV s’autodétruira dans {countdown} seconde{countdown > 1 ? "s" : ""}...
              </p>
            )}
          </div>

          <div className="flex-1 bg-gray-900 border border-green-700 rounded-lg p-6 shadow-lg z-20 relative">
            <h2 className="text-xl text-green-300 font-bold mb-4">🗭 Navigation</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { path: "/contact", label: "📍 Coordonnées" },
                { path: "/lettre", label: "📄 Lettre de Motivation" },
                { path: "/experience", label: "🚰 Expérience" },
                { path: "/competences", label: "💡 Compétences" },
                { path: "/hobbies", label: "🎮 Hobbies" },
                { path: "/documents", label: "📂 Documents" },
                { path: "/contact", label: "📞 Contact" },
                { path: "/portfolio", label: "💼 Portfolio" }
              ].map((item, index) => (
                <Link key={index} to={item.path} className="btn-hacker glitch" data-text={item.label}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 bash-terminal z-20 relative mt-0">
            <div className="text-green-500 mb-2">root@dave:~# Trouvé l'easter eggs avec une commande bash</div>
            {terminalOutput.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <form onSubmit={handleCommand} className="mt-2 flex">
              <span className="text-green-500 mr-2">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="bash-input"
                placeholder="Tape une commande..."
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerHome;
