import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Keep the preloader for 1.5 seconds, then fade it out
        const fadeTimer = setTimeout(() => {
            setFading(true);
        }, 1500);

        // Remove the preloader completely from the DOM after the fade transition
        const removeTimer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 1.5s + 0.5s fade duration

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="relative flex flex-col items-center">
                {/* Animated logo/loader */}
                <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-violet-500 animate-[spin_1s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-fuchsia-500 animate-[spin_1.5s_linear_infinite_reverse]" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 animate-pulse" />
                </div>

                {/* Loading text with animated dots */}
                <div className="mt-6 text-xl tracking-[0.3em] font-light text-gray-300 flex">
                    <span>R</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>F</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
