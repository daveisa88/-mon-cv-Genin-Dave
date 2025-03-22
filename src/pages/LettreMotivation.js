import React from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const LettreMotivation = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 overflow-auto">
            {/* Conteneur principal avec scroll activé */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto">

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
                        <strong>Candidature au poste de Technicien Informatique – Réf. 2025-1830348</strong><br />
                        Monsieur MILLET,
                    </p>

                    <p className="mb-4">
                        Passionné par l’informatique depuis de nombreuses années, j’ai entamé une reconversion après plus de 20 ans passés dans l’industrie automobile, dont <strong>24 ans</strong> dans le domaine industriel en tant qu’<strong>opérateur puis régleur robotier</strong> sur des machines de haute précision.
                    </p>

                    <p className="mb-4">
                        Diplômé en <strong>assistance informatique et cybersécurité en entreprise</strong>, j’ai mis à profit mes compétences dans un cadre professionnel en occupant bénévolement, depuis deux ans, le poste de <strong>technicien helpdesk et administrateur Google Workspace</strong> chez Gaea21. J’y assure le support utilisateurs, la résolution d’incidents techniques ainsi que la gestion de l’environnement collaboratif.
                    </p>

                    <p className="mb-4">
                        Mon approche pragmatique, m’a permis de concevoir des solutions efficaces et créatives, adaptées aux besoins spécifiques des utilisateurs (par exemple : <strong>amélioration du CRM pour la gestion des candidatures RH</strong>).
                    </p>

                    <p className="mb-4">
                        En parallèle, j’ai mené plusieurs projets personnels ambitieux :
                    </p>

                    <ul className="list-disc pl-6 mb-4">
                        <li>Le développement de solutions numériques innovantes (projets autour de <strong>Raspberry Pi</strong> et conception sous <strong>Visual Studio</strong>).</li>
                        <li>La participation à des défis en cybersécurité sur des plateformes comme <strong>Hack The Box</strong>, stimulant ma curiosité et ma persévérance.</li>
                    </ul>

                    <p className="mb-4">
                        Conscient des responsabilités associées à ce poste, notamment en matière de <strong>confidentialité, de sécurité informatique</strong> et de respect du <strong>statut spécial encadrant l’administration pénitentiaire</strong>, je suis pleinement disposé à m’investir dans un environnement aussi exigeant que sensible. L’exigence d’une <strong>habilitation au Secret de la défense nationale</strong> est pour moi un engagement que je suis prêt à assumer avec la plus grande rigueur.
                    </p>

                    <p className="mb-4">
                        Le poste proposé à la <strong>Maison d’arrêt d’Épinal</strong> m’attire par la diversité de ses missions, la richesse de son environnement technique et les valeurs qu’il incarne. Sérieux, polyvalent et réactif, je souhaite aujourd’hui mettre mes compétences au service du <strong>ministère de la Justice</strong> et contribuer au bon fonctionnement de vos systèmes informatiques.
                    </p>

                    <p className="mb-4">
                        Je reste à votre disposition pour un entretien à votre convenance.
                    </p>

                    <p>
                        Dans l’attente de votre retour, je vous prie d’agréer, Monsieur MILLET, l’expression de mes salutations distinguées.
                    </p>

                    <p className="mt-4 font-semibold">Dave Genin</p>


                    {/* ✅ Signature */}
                    <p className="mt-6 text-right font-bold text-lg">Dave Genin</p>
                </div>
            </div>
        </div>
    );
};

export default LettreMotivation;

