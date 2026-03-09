import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        // Calculate how far the user has scrolled
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        // Calculate the total scrollable height
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Calculate the scroll percentage
        const scrolled = (winScroll / height) * 100;

        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-r-full shadow-[0_0_10px_rgba(167,139,250,0.7)] transition-all duration-150 ease-out"
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
