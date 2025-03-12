import React from "react";

const Profile = () => {
    return (
        <div className="relative flex flex-col items-center bg-blue-900 text-white p-10 w-[400px] rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 mx-auto mt-14">

            {/* Photo de profil carrée et intégrée */}
            <div className="w-32 h-32 bg-white rounded-md overflow-hidden mb-4">
                <img
                    src="/profile.jpg"
                    alt="Dave Genin"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Informations */}
            <h2 className="text-4xl font-bold">Dave Genin</h2>
            <h2 className="text-2xl font-bold">T.A.I (Developpement)</h2>

            {/* Lien vers Google Maps */}
            <p className="mt-8 text-lg">
                🏠{" "}
                <a
                    href="https://www.google.com/maps/search/Gugnecourt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline font-semibold"
                >
                        311 rue des Aulnées, 88600 Gugnecourt
                </a>
            </p>

            <p className="mt-4 text-lg font-semibold">🎂 9 août 1976</p>
        </div>
    );
};

export default Profile;
