import React from "react";

const Profile = () => {
    return (
        <div className="relative flex flex-col items-center bg-blue-900 text-white p-10 w-[400px] rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 mx-auto mt-10">
            {/* Photo de profil */}
            <div className="relative -top-16">
                <img
                    src="/profile.jpg"
                    alt="Dave Genin"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                />
            </div>

            {/* Informations */}
            <h2 className="text-4xl font-bold -mt-6">Dave Genin</h2>

            {/* Lien vers Google Maps */}
            <p className="mt-4 text-lg">
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

            <p className="mt-2 text-lg font-semibold">🎂 9 août 1976</p>
        </div>
    );
};

export default Profile;
