import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const LettreMotivation = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* Conteneur principal avec scroll activé */}
            <div className="bg-black text-green-400 p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto border border-green-700">


                {/* ✅ Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                    onClick={() => navigate(-1)}
                >
                    &times;
                </button>

                {/* ✅ Logo */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-32 mb-6 rounded-lg shadow-lg" />

                {/* ✅ Titre */}
                <h2 className="text-3xl font-bold mb-6 text-center">Lettre de Motivation</h2>

                {/* ✅ Texte avec scroll activé */}
                <div className="text-justify text-lg leading-relaxed overflow-auto max-h-[70vh] px-4">
                    <p className="mb-4"><strong>Madame, Monsieur,</strong></p>

                    <p className="mb-4">
                        <strong>Candidature pour un poste dans le domaine informatique</strong><br />
                        Madame, Monsieur
                    </p>

                    <p className="mb-4">
                        Après plus de 20 ans d’expérience dans le secteur industriel, j’ai choisi de me reconvertir dans un domaine qui me passionne : l’informatique. Titulaire d’un diplôme en <strong>assistance informatique et cybersécurité en entreprise</strong>, je me suis engagé pleinement dans ce nouveau parcours professionnel.
                    </p>

                    <p className="mb-4">
                        Depuis deux ans, j’interviens bénévolement en tant que <strong>technicien helpdesk et administrateur Google Workspace</strong> chez Gaea21. Mon rôle consiste à assurer le support utilisateurs, résoudre les incidents techniques, et gérer les outils collaboratifs. J’ai également contribué à l’<strong>amélioration d’un CRM dédié à la gestion RH</strong>, en proposant des ajustements fonctionnels adaptés aux besoins des équipes.
                    </p>

                    <p className="mb-4">
                        Je complète cette expérience par la réalisation de projets personnels dans le domaine du développement et de la cybersécurité :
                    </p>

                    <ul className="list-disc pl-6 mb-4">
                        <li>Développement de solutions numériques autour de <strong>Raspberry Pi</strong> et <strong>Visual Studio</strong>.</li>
                        <li>Participation à des challenges de cybersécurité sur <strong>Hack The Box</strong>.</li>
                        <li>Simulation de réseaux et scénarios de sécurité dans des <strong>mini-labs virtualisés</strong> (VMs, outils d’analyse, scans).</li>
                    </ul>

                    <p className="mb-4">
                        Rigoureux, autonome et impliqué, je suis aujourd’hui à la recherche d’un poste dans lequel je pourrai mettre à profit mes compétences, tout en continuant à me perfectionner. Je suis particulièrement attentif aux enjeux de <strong>confidentialité, de sécurité informatique</strong> et de fiabilité des systèmes.
                    </p>

                    <p className="mb-4">
                        Je reste à votre disposition pour toute information complémentaire ou pour un entretien à votre convenance.
                    </p>

                    <p>
                        Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.
                    </p>

                    <p className="mt-4 font-semibold">Dave Genin</p>
                </div>
            </div>
        </div>
    );
};

export default LettreMotivation;

