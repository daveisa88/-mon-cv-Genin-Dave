import React, { useState } from "react";
import helpdeskLogo from "../assets/fond.jpeg";

const Contact = () => {
    // État pour gérer l'annotation du recruteur
    const [annotation, setAnnotation] = useState("");
    const [savedAnnotation, setSavedAnnotation] = useState("");

    const saveAnnotation = () => {
        setSavedAnnotation(annotation);
    };

    const clearAnnotation = () => {
        setAnnotation("");
        setSavedAnnotation("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            {/* Conteneur principal : Contact + Annotations côte à côte */}
            <div className="flex flex-wrap justify-center gap-10 w-4/5 lg:flex-nowrap">

                {/* 📌 Colonne de gauche : Contact */}
                <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-full lg:w-1/2 flex flex-col items-center">

                    {/* Logo IT Helpdesk */}
                    <img
                        src={helpdeskLogo}
                        alt="Helpdesk Développement"
                        className="w-40 mb-4 rounded-lg"
                    />

                    {/* Titre Contact */}
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>

                    {/* Boutons */}
                    <a href="mailto:kalidave@outlook.fr" className="w-full">
                        <button className="bg-blue-700 hover:bg-blue-900 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-2">
                            📧 Email
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/dave-genin-9bb33526b" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-2">
                            🔗 LinkedIn
                        </button>
                    </a>


                    <a href="skype:live:.cid.249b3896c8e815e6?chat" className="w-full">
                        <button className="bg-blue-700 hover:bg-blue-900 w-full text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-2">
                            📞 Skype
                        </button>
                    </a>

                    {/* 📱 Téléphone sur une seule ligne */}
                    <button className="bg-green-600 hover:bg-green-800 w-full text-white py-3 rounded-lg flex flex-row items-center justify-center gap-2">
                        📱 Téléphone : 07 49 67 91 48
                    </button>
                </div>

                {/* 📌 Colonne de droite : Annotations + RDV */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">

                    {/* Annotations du Recruteur */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Annotations du Recruteur</h3>
                        <textarea
                            className="w-full h-20 p-2 border border-blue-800 rounded-md"
                            placeholder="Écrivez vos annotations ici..."
                            value={annotation}
                            onChange={(e) => setAnnotation(e.target.value)}
                        ></textarea>
                        <div className="flex justify-between mt-3">
                            <button
                                onClick={saveAnnotation}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            >
                                Enregistrer
                            </button>
                            <button
                                onClick={clearAnnotation}
                                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                            >
                                Supprimer
                            </button>
                        </div>
                        <div className="mt-3 p-3 bg-white border border-blue-800 rounded-md">
                            <h4 className="text-blue-800 font-bold">Annotations sauvegardées :</h4>
                            <p className="text-gray-700">{savedAnnotation || "Aucune annotation sauvegardée pour le moment."}</p>
                        </div>
                    </div>

                    {/* Planifier un Rendez-vous */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Planifier un Rendez-vous</h3>
                        <p className="text-gray-700">Cliquez sur le bouton ci-dessous pour envoyer un e-mail et planifier un entretien.</p>
                        <a href="mailto:kalidave@outlook.fr?subject=Demande%20de%20Rendez-vous"
                            className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg">
                            📅 Planifier un RDV
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
