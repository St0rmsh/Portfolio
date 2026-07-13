"use client";

import React, { useImperativeHandle, useRef, forwardRef, useLayoutEffect } from 'react'
import gsap, { SplitText, ScrollTrigger } from '../libs/gsap'

const TextReveal = forwardRef(({
    children,
    className = "",
    trigger = "mount",
    scrollStart = "top 75%",
    splitBy = "lines",
    duration = 0.67,
    stagger = 0.09,
    delay = 0,
    ease = "power3.out",
}, ref) => {
    const wrapperRef = useRef(null);
    const splitTextRef = useRef(null);
    const tlRef = useRef(null);
    const scrollTriggerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: () => tlRef.current?.play(),
        reverse: () => tlRef.current?.reverse(),
        restart: () => tlRef.current?.restart(),
        pause: () => tlRef.current?.pause(),
        resume: () => tlRef.current?.resume(),
    }))

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        splitTextRef.current = new SplitText(wrapperRef.current, { type: splitBy, lineThreshold: 0.3 });
        const element = splitTextRef.current[splitBy];

        gsap.set(element, { yPercent: 110, opacity: 0 });

        tlRef.current = gsap.timeline({
            paused: true,
            defaults: { delay },
        });

        tlRef.current.to(element, {
            yPercent: 0,
            opacity: 1,
            duration,
            stagger: {
                each: stagger,
                from: "start",
            },
            ease,
        });

        if (trigger === "mount") {
            tlRef.current.play();
        }

        if (trigger === "scroll") {
            scrollTriggerRef.current = ScrollTrigger.create({
                trigger: wrapperRef.current,
                start: scrollStart,
                once: false,
                onEnter: () => {
                    tlRef.current?.play();
                },
            });
        }

        return () => {
            tlRef.current?.kill();
            scrollTriggerRef.current?.kill();
            scrollTriggerRef.current = null;
            splitTextRef.current?.revert();
        }

    }, [splitBy, trigger, delay, stagger, duration, ease, scrollStart])

    return (
        <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
            {children}
        </div>
    )
})

TextReveal.displayName = 'TextReveal';

export default TextReveal