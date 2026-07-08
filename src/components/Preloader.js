import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fading, setFading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 20) + 10;
            });
        }, 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const fadeTimer = setTimeout(() => {
                setFading(true);
            }, 100);

            const removeTimer = setTimeout(() => {
                setLoading(false);
            }, 300);

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [progress]);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] bg-[#080809] flex flex-col items-center justify-center transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div className="w-64 font-mono text-xs">
                <div className="flex justify-between mb-2 text-white uppercase tracking-wider font-bold">
                    <span>SYS_INIT // RADIF_IO</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-900 border border-neutral-800 relative overflow-hidden">
                    <div
                        className="h-full bg-safety transition-all duration-75 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <div className="mt-2 text-neutral-600 text-[10px] uppercase tracking-wider flex justify-between">
                    <span>CORES: ACTIVE</span>
                    <span>BOOT_OK</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;

