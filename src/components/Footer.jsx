'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';

export default function Footer({ nextProject, handleClick, index, total }) {
    const containerRef = useRef(null);
    const badgeRef = useRef(null);
    const quickX = useRef(null);
    const quickY = useRef(null);
    const [hovering, setHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        if (!quickX.current) {
            quickX.current = gsap.quickTo(badgeRef.current, 'x', { duration: 0.35, ease: 'power3.out' });
            quickY.current = gsap.quickTo(badgeRef.current, 'y', { duration: 0.35, ease: 'power3.out' });
        }

        const rect = containerRef.current.getBoundingClientRect();
        quickX.current(e.clientX - rect.left);
        quickY.current(e.clientY - rect.top);
    };

    return (
        <footer className="relative h-screen w-full bg-[#0a0a0a] text-[#f4f4f2] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between px-8 md:px-16 pt-10">
                <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                    Next Project
                </span>
                {total && (
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                        {String(index ?? 0).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                )}
            </div>
            <div className="w-full h-px bg-[#f4f4f2]/10" />

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={handleClick}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
                aria-label={`View next project: ${nextProject.title}`}
                className="relative flex-1 flex items-center justify-center cursor-pointer select-none px-6 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f2]/40"
            >
                <h1
                    className="font-space-grotesk font-medium text-center leading-[0.95]
                    text-[13vw] md:text-[8vw] tracking-tight
                    transition-colors duration-500"
                    style={{ color: hovering ? '#f4f4f2' : '#f4f4f2cc' }}
                >
                    {nextProject.title}
                </h1>

                <div
                    ref={badgeRef}
                    className="pointer-events-none absolute top-0 left-0 rounded-full bg-[#f4f4f2] text-[#0a0a0a]
                    flex items-center justify-center font-manrope text-sm tracking-wide uppercase
                    transition-[opacity,transform] duration-150 ease-out"
                    style={{
                        width: 120,
                        height: 120,
                        transform: `translate(-50%, -50%) scale(${hovering ? 1 : 0})`,
                        opacity: hovering ? 1 : 0,
                    }}
                >
                    View →
                </div>
            </div>

            <div className="w-full h-px bg-[#f4f4f2]/10" />
            <div className="flex items-center justify-center px-8 md:px-16 pb-10 pt-6">
                <p className="font-manrope text-xs md:text-sm text-[#f4f4f2]/40 tracking-wide">
                    Click anywhere to view the project
                </p>
            </div>
        </footer>
    );
}