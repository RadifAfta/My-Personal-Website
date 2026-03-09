import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse move tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeaveViewport = () => setIsVisible(false);
        const handleMouseEnterViewport = () => setIsVisible(true);

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeaveViewport);
        document.addEventListener('mouseenter', handleMouseEnterViewport);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Hover detection for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            // Check if it's an interactive element
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeaveViewport);
            document.removeEventListener('mouseenter', handleMouseEnterViewport);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    // Spring physics for the outer ring (delayed movement)
    const springProps = useSpring({
        x: mousePosition.x,
        y: mousePosition.y,
        config: { tension: 400, friction: 28, mass: 0.5 },
    });

    // Calculate scales based on state
    let innerDotScale = isClicking ? 0.5 : (isHovering ? 0 : 1);
    let outerRingScale = isClicking ? 0.8 : (isHovering ? 1.5 : 1);
    let outerRingOpacity = isHovering ? 0.1 : 0.5;

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <style jsx global>{`
        /* Hide default cursor globally on non-touch devices */
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

            {/* Outer delayed ring */}
            <animated.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-violet-500 bg-violet-500/10 flex items-center justify-center transition-opacity duration-300"
                style={{
                    width: 32,
                    height: 32,
                    transform: springProps.x.to((x) => `translate3d(${x - 16}px, ${springProps.y.get() - 16}px, 0) scale(${outerRingScale})`),
                    opacity: isVisible ? outerRingOpacity : 0,
                    backdropFilter: isHovering ? 'invert(1)' : 'none',
                }}
            />

            {/* Inner instant dot */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-violet-400 transition-all duration-150 ease-out flex items-center justify-center"
                style={{
                    width: 8,
                    height: 8,
                    transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0) scale(${innerDotScale})`,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                {/* Play icon overlay for hover state on specific elements (like project view) */}
                {isHovering && (
                    <div className="absolute opacity-0 scale-50 transition-all duration-300" style={{ opacity: innerDotScale === 0 ? 1 : 0, transform: `scale(${innerDotScale === 0 ? 1 : 0})` }}>
                        <span className="text-white text-[10px]">↗</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomCursor;
