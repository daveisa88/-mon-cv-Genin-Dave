import React from "react";

const Profile = () => {
    return (
<<<<<<< HEAD
        <div className="relative flex flex-col items-center bg-blue-900 text-white p-4 w-[400px] rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 mx-auto mt-10">
=======
        <div className="relative flex flex-col items-center bg-blue-900 text-white p-10 w-[400px] rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 mx-auto mt-10">
>>>>>>> 1d954fc34d01f3a22459ab81139bc6dc7ccf5ddb
            {/* Photo de profil carrée et intégrée */}
            <div className="w-30 h-32 bg-white rounded-md overflow-hidden mb-4">
                <img
                    src="/profile.jpg"
                    alt="Dave Genin"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Informations */}
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-0">Dave Genin</h2>

            {/* T.A.I en vertical */}
            <div className="text-3xl font-bold flex flex-col items-center leading-tight">
                <span className="text-1xl">T</span>
                <span className="text-lg">Technicien</span>
                <span className="text-1xl">A</span>
                <span className="text-lg">Assistance</span>
                <span className="text-1xl">I</span>
=======
            <h2 className="text-4xl font-bold mb-2">Dave Genin</h2>

            {/* T.A.I en vertical */}
            <div className="text-3xl font-bold flex flex-col items-center leading-tight">
                <span className="text-4xl">T</span>
                <span className="text-lg">Technicien</span>
                <span className="text-4xl">A</span>
                <span className="text-lg">Assistance</span>
                <span className="text-4xl">I</span>
>>>>>>> 1d954fc34d01f3a22459ab81139bc6dc7ccf5ddb
                <span className="text-lg">Informatique</span>
            </div>

            {/* Mention de cybersécurité */}
<<<<<<< HEAD
            <p className="text-lg font-semibold mt-0"></p>
=======
            <p className="text-lg font-semibold mt-2">(Cybersécurité en entreprise)</p>
>>>>>>> 1d954fc34d01f3a22459ab81139bc6dc7ccf5ddb
        </div>
    );
};

export default Profile;
