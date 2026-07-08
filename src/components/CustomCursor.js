import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            // Update positions directly on mousemove
            dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
            ring.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
        };

        const handleMouseLeaveViewport = () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        };
        const handleMouseEnterViewport = () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        };

        const handleMouseDown = () => {
            // Squish effect on click
            ring.style.transform += ' scale(0.75)';
            dot.style.transform += ' scale(1.2)';
        };
        const handleMouseUp = () => {
            ring.style.transform = ring.style.transform.replace(' scale(0.75)', '');
            dot.style.transform = dot.style.transform.replace(' scale(1.2)', '');
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeaveViewport);
        document.addEventListener('mouseenter', handleMouseEnterViewport);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeaveViewport);
            document.removeEventListener('mouseenter', handleMouseEnterViewport);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <style jsx global>{`
                @media (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
                }
                                .custom-cursor-dot {
                    width: 6px;
                    height: 6px;
                    background-color: #FF5A00; /* safety-orange */
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 99999;
                    will-change: transform;
                    transform: translate3d(-100px, -100px, 0);
                    transition: opacity 0.1s ease-out, transform 0.05s ease-out;
                }
                .custom-cursor-ring {
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(255, 90, 0, 0.4);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 99998;
                    will-change: transform;
                    transform: translate3d(-100px, -100px, 0);
                    /* GPU-accelerated smooth trailing lag effect using native browser transitions */
                    transition: 
                        opacity 0.15s ease-out, 
                        width 0.15s ease-out, 
                        height 0.15s ease-out, 
                        border-color 0.15s ease-out, 
                        background-color 0.15s ease-out,
                        transform 0.05s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
            <div ref={dotRef} className="custom-cursor-dot" />
            <div ref={ringRef} className="custom-cursor-ring" />
        </>
    );
};

export default CustomCursor;
