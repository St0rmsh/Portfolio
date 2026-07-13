"use client"
import { useEffect, useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "gsap";
import useViewTransition from "@/hooks/useViewTransition";

const CARD_W = 320;
const CARD_H = 300;
const CARD_SCALE = 1.25;
const IMAGE_REST_SCALE = 1.6;
const IMAGE_HOVER_SCALE = 1;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const numberRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.set(imageRef.current, { scale: IMAGE_REST_SCALE });
    }, []);

    const onEnter = () => {
        onHoverStart?.();

        gsap.to(cardRef.current, {
            width: CARD_W * CARD_SCALE,
            height: CARD_H * CARD_SCALE,
            duration: 0.25,
            ease: 'power3.out',
        });

        gsap.to(imageRef.current, {
            scale: IMAGE_HOVER_SCALE,
            duration: 0.25,
            ease: 'power3.out',
        });

        numberRef.current?.play();
        titleRef.current?.play();
    };

    const onLeave = () => {
        onHoverEnd?.();

        gsap.to(cardRef.current, {
            width: CARD_W,
            height: CARD_H,
            duration: 0.2,
            ease: 'power3.out',
        });

        gsap.to(imageRef.current, {
            scale: IMAGE_REST_SCALE,
            duration: 0.2,
            ease: 'power3.out',
        });

        numberRef.current?.reverse();
        titleRef.current?.reverse();
    };

    const { navigateTo } = useViewTransition();
    const handleClick = () => navigateTo(`/projects/${project.slug}`);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            handleClick();
        }
    };

    return (
        <div
            ref={cardRef}
            onClick={handleClick}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onFocus={onEnter}
            onBlur={onLeave}
            onKeyDown={handleKeyDown}
            role="link"
            tabIndex={0}
            aria-label={`View project: ${project.title}`}
            style={{ width: CARD_W, height: CARD_H, flexShrink: 0, overflow: 'visible', cursor: 'pointer' }}
            className="relative focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f2]/40 rounded-sm"
        >
            <div style={{ bottom: `calc(100% + 1.5rem)` }} className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-4">
                <TextReveal ref={numberRef} duration="0.25" trigger="manual" splitBy="chars">
                    <h3 className="text-[1.3rem] text-[#010101]">{project.number}</h3>
                </TextReveal>
                <TextReveal ref={titleRef} duration="0.1" trigger="manual" splitBy="chars">
                    <h3 className="text-[1.3rem] text-white">{project.title}</h3>
                </TextReveal>
            </div>

            <div className="imageDiv absolute h-full w-full overflow-hidden rounded-sm">
                <img
                    style={{ transformOrigin: 'center center', userSelect: 'none' }}
                    className="h-full w-full object-cover"
                    ref={imageRef}
                    src={project.coverImage}
                    alt={project.title}
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default CarouselCard;