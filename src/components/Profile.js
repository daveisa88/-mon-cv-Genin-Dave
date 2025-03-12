import React from "react";

const Profile = () => {
    return (
        <div className="relative flex flex-col items-center bg-blue-900 text-white p-4 w-[400px] rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 mx-auto mt-4">
            {/* Photo de profil carrée et intégrée */}
            <div className="w-30 h-32 bg-white rounded-md overflow-hidden mb-4">
                <img
                    src="/profile.jpg"
                    alt="Dave Genin"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Informations */}
            <h2 className="text-4xl font-bold mb-2">Dave Genin</h2>

            {/* T.A.I en vertical */}
            <div className="text-3xl font-bold flex flex-col items-center leading-tight">
                <span className="text-2xl">T</span>
                <span className="text-lg">Technicien</span>
                <span className="text-xl">A</span>
                <span className="text-lg">Assistance</span>
                <span className="text-2xl">I</span>
                <span className="text-lg">Informatique</span>
            </div>

            {/* Mention de cybersécurité */}
            <p className="text-lg font-semibold mt-2">(Cybersécurité en entreprise)</p>
        </div>
    );
};

export default Profile;
