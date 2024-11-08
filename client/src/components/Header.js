import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
    return (
        <header 
            className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/bg-image.png')", // Use the relative path from the public folder
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            <div className="typewriter">
                <h1 className="font-dancingScript text-highlight text-8xl">
                    herWellness...
                </h1>
            </div>
            <p className="font-sourGummy text-secondary text-3xl mt-4">
                Your health journey, empowered.
            </p>
            <a href="#about" className="mt-6 inline-flex items-center text-white bg-highlight py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
                Get Started
                <FaArrowRight className="ml-2 text-xl" />
            </a>
        </header>
    );
};

export default Header;
