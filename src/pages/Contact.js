import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import helpdeskLogo from "../assets/fond.jpeg";

const Contact = () => {
    const navigate = useNavigate();
    const [annotation, setAnnotation] = useState(" ");
    const [savedAnnotation, setSavedAnnotation] = useState("");

    const saveAnnotation = () => setSavedAnnotation(annotation);
    const clearAnnotation = () => {
        setAnnotation("");
        setSavedAnnotation("");
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 overflow-auto">
            <div className="bg-black text-green-400 p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 flex flex-col items-center relative max-h-[90vh] overflow-auto border border-green-700">
                
                {/* Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 text-green-500 text-3xl font-bold hover:text-red-600"
                    onClick={() => navigate(-1)}
                >
                    ✖
                </button>

                {/* Logo */}
                <img src={helpdeskLogo} alt="Helpdesk" className="w-40 mb-4 rounded-lg shadow" />

                {/* Titre */}
                <h2 className="text-2xl font-bold text-green-400 mb-6">Contact</h2>

                {/* Mise en page responsive */}
                <div className="flex flex-wrap justify-center gap-8 w-full overflow-auto max-h-[70vh] px-4 lg:flex-nowrap">
                    
                    {/* Partie gauche - Infos contact */}
                    <div className="bg-gray-900 border border-green-700 p-6 rounded-lg shadow w-full lg:w-1/2">
                        <a href="mailto:kalidave.88@outlook.fr" className="w-full block mb-2">
                            <button className="bg-green-800 hover:bg-green-600 w-full py-3 rounded text-white">📧 Email</button>
                        </a>

                        <a href="https://www.linkedin.com/in/dave-genin-9bb33526b" target="_blank" rel="noopener noreferrer" className="w-full block mb-2">
                            <button className="bg-green-800 hover:bg-green-600 w-full py-3 rounded text-white">🔗 LinkedIn</button>
                        </a>

                        <a href="skype:live:.cid.249b3896c8e815e6?chat" className="w-full block mb-2">
                            <button className="bg-green-800 hover:bg-green-600 w-full py-3 rounded text-white">📞 Skype</button>
                        </a>

                        <div className="bg-green-700 text-black py-3 rounded text-center font-bold mb-4">
                            📱 Téléphone : 07 49 67 95 48
                        </div>

                        <div className="mt-4 text-green-200 bg-black border border-green-600 p-4 rounded text-sm text-center">
                            <p className="font-bold mb-1">📍 Adresse :</p>
                            <p>311 rue des Aulnées<br />88600 Gugnecourt</p>
                            <p className="mt-3 font-bold">🎂 Date de naissance :</p>
                            <p>9 août 1976</p>
                        </div>
                    </div>

                    {/* Partie droite - Annotations et RDV */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        {/* Bloc annotation */}
                        <div className="bg-gray-900 border border-green-700 p-4 rounded shadow">
                            <h3 className="text-lg font-bold mb-3">📝 Annotations du Recruteur</h3>
                            <textarea
                                className="w-full h-24 p-2 bg-black border border-green-600 rounded text-green-300"
                                placeholder="Écrivez vos annotations ici..."
                                value={annotation}
                                onChange={(e) => setAnnotation(e.target.value)}
                            ></textarea>
                            <div className="flex justify-between mt-3">
                                <button onClick={saveAnnotation} className="bg-green-700 hover:bg-green-500 text-black py-2 px-4 rounded">
                                    Enregistrer
                                </button>
                                <button onClick={clearAnnotation} className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded">
                                    Supprimer
                                </button>
                            </div>
                            <div className="mt-3 bg-black border border-green-600 rounded p-2 text-sm">
                                <p className="font-bold text-green-400">🗂️ Annotations sauvegardées :</p>
                                <p>{savedAnnotation || "Aucune annotation sauvegardée pour le moment."}</p>
                            </div>
                        </div>

                        {/* Bloc planification */}
                        <div className="bg-gray-900 border border-green-700 p-4 rounded shadow text-center">
                            <h3 className="text-lg font-bold mb-2">📅 Planifier un Rendez-vous</h3>
                            <p className="text-green-300 text-sm mb-3">Cliquez ci-dessous pour envoyer un e-mail et planifier un entretien.</p>
                            <a
                                href="mailto:kalidave@outlook.fr?subject=Demande%20de%20Rendez-vous"
                                className="inline-block bg-green-700 hover:bg-green-500 text-black font-bold py-2 px-6 rounded"
                            >
                                ✉️ Planifier un RDV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

