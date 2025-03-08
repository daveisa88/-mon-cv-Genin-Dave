import React from "react";

const Profile = () => {
    return (
        <div className="bg-blue-800 text-white p-6 flex justify-between items-center w-3/4 rounded-lg shadow-lg mt-16 backdrop-blur-md bg-opacity-80">
            <div>
                <h2 className="text-2xl font-bold">Dave Genin</h2>

                {/* Lien vers Google Maps pour Gugnecourt */}
                <p>
                    🏠{" "}
                    <a
                        href="https://www.google.com/maps/search/Gugnecourt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                    >
                        311 rue des Aulnées, 88600 Gugnecourt
                    </a>
                </p>

                <p>🎂 Date de naissance : 9 août 1976</p>
            </div>

            {/* Photo à droite (plus grande) */}
            <img
                src="/profile.jpg"
                alt="Dave Genin"
                className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg"
            />
        </div>
    );
};

export default Profile;
