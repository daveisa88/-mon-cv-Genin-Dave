import React from "react";
import helpdeskLogo from "../assets/fond.jpeg"; // Assure-toi que le logo est bien dans "assets"

const LettreMotivation = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Conteneur principal avec fond bleu */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center">

                {/* Logo IT Helpdesk */}
                <img src={helpdeskLogo} alt="Helpdesk Développement" className="w-32 mb-6 rounded-lg shadow-lg" />

                {/* Titre */}
                <h2 className="text-3xl font-bold mb-6 text-center">Lettre de Motivation</h2>

                {/* Contenu de la lettre */}
                <div className="text-justify text-lg leading-relaxed">
                    <p className="mb-4">
                        <strong>Madame, Monsieur,</strong>
                    </p>

                    <p className="mb-4">
                        Fort d’une expérience de <strong>24 ans</strong> dans le domaine industriel, où j’ai évolué de simple opérateur à
                        <strong> régleur robotier</strong> sur des machines de haute précision, j’ai décidé de me reconvertir pour suivre ma véritable passion :
                        l’informatique et les nouvelles technologies.
                    </p>

                    <p className="mb-4">
                        Dans le cadre de cette reconversion, j’ai suivi une formation d’un an en tant que
                        <strong> technicien en assistance informatique et cybersécurité</strong>, tout en approfondissant mes connaissances
                        à travers des projets personnels ambitieux. Mon intérêt pour les défis techniques m’a conduit à explorer divers domaines, tels que :
                    </p>

                    <ul className="list-disc pl-6 mb-4">
                        <li>Le développement de solutions numériques innovantes (projets basés sur <strong>Raspberry Pi</strong> et conception <strong>Visual Studio</strong>).</li>
                        <li>Les défis en cybersécurité, notamment via des plateformes comme <strong>Hack The Box</strong>, qui m’ont permis de cultiver ma curiosité et mon sens de la persévérance.</li>
                    </ul>

                    <p className="mb-4">
                        En poste depuis un an chez <strong>Gaea21</strong> en tant que technicien Helpdesk, j’ai su mettre à profit mes compétences
                        techniques et humaines pour accompagner les utilisateurs et résoudre des problématiques variées. Mon approche pragmatique, que j’aime à
                        comparer à celle de <strong>MacGyver</strong>, m’a permis de concevoir des solutions efficaces et créatives, adaptées aux besoins spécifiques des utilisateurs.
                    </p>

                    <p className="mb-4">
                        <strong>Rigoureux, curieux et polyvalent</strong>, je suis constamment en quête d’apprentissage et de perfectionnement,
                        que ce soit à travers des projets professionnels ou personnels. Mon esprit d’analyse, combiné à ma capacité d’adaptation,
                        me permet de m’intégrer rapidement à tout type <strong>d’environnement technique</strong>.
                    </p>

                    <p className="mb-4">
                        Je serais honoré de mettre mes compétences, ma passion pour les nouvelles technologies et mon enthousiasme au service de votre entreprise.
                        Une rencontre serait l’occasion idéale pour vous détailler mes motivations et discuter des projets sur lesquels je pourrais apporter une
                        réelle valeur ajoutée.
                    </p>

                    <p>
                        Dans l’attente de votre retour, je vous remercie de l’attention que vous porterez à ma candidature et vous prie d’agréer,
                        Madame, Monsieur, l’expression de mes salutations distinguées.
                    </p>

                    <p className="mt-6 text-right font-bold text-lg">Dave Genin</p>
                </div>
            </div>
        </div>
    );
};

export default LettreMotivation;
