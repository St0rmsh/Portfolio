"use client"
import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard';
import gsap from 'gsap';

const CARD_W = 320;
const CARD_H = 300;
const SCALE = 1.4;
const CARD_GAP = 10.35;
const DURATION = 8;

const TRACK_H = CARD_H * SCALE;

const InfiniteCarousel = ({ projects }) => {
    const trackRef = useRef(null);
    const tweenRef = useRef(null);
    const isHoveredRef = useRef(false); // tracks whether a card currently has the tween paused via hover

    const doubled = [...projects, ...projects, ...projects, ...projects];

    useEffect(() => {
        if (!projects.length) return;

        const singleWidth = projects.length * (CARD_W + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current, {
            x: -singleWidth,
            ease: 'none',
            duration: DURATION,
            repeat: -1,
        });

        const handleVisibility = () => {
            if (document.hidden) {
                tweenRef.current?.pause();
            } else if (!isHoveredRef.current) {
                // only resume if nothing is currently hovered — otherwise
                // respect the existing hover-pause state
                tweenRef.current?.play();
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility);
            tweenRef.current?.kill();
        };
    }, [projects]);

    if (!projects.length) return null;

    return (
        <div style={{ padding: `${TRACK_H * 0.5}px 0 24px` }} className="overflow-hidden">
            <div
                ref={trackRef}
                style={{ gap: `${CARD_GAP}px`, width: 'max-content', height: `${TRACK_H}px` }}
                className="track flex items-center"
            >
                {doubled.map((project, index) => (
                    <CarouselCard
                        key={`${project.slug ?? project.id ?? index}-${index}`}
                        project={project}
                        onHoverStart={() => {
                            isHoveredRef.current = true;
                            tweenRef.current?.pause();
                        }}
                        onHoverEnd={() => {
                            isHoveredRef.current = false;
                            tweenRef.current?.play();
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;