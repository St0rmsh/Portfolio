"use client"
import React, { useRef } from 'react'
import TextReveal from './TextReveal'
import gsap, { ScrollTrigger, useGSAP } from "../libs/gsap"
import useViewTransition from '@/hooks/useViewTransition'
import Footer from './Footer'

const ProjectPage = ({ project, nextProject }) => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            // skip scroll-driven motion entirely — just show final states
            gsap.set(imageRef.current, { clipPath: 'inset(0% 0 0 0)', scale: 1 })
            gsap.set('.reveal-panel', { rotate: 0 })
            return
        }

        gsap.to(imageRef.current, {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 2.8,
            ease: "power3.out",
            delay: 0.8,
        })

        // only target gallery sections, not the hero
        const gallerySections = gsap.utils.toArray(".gallery-section")

        gallerySections.forEach((section, index) => {
            const panel = section.querySelector('.reveal-panel')
            if (!panel) return

            gsap.to(panel, {
                rotate: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true,
                },
            })

            if (index === gallerySections.length - 1) return

            ScrollTrigger.create({
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
            })
        })
    }, { scope: containerRef, dependencies: [project.slug] })

    const { navigateTo } = useViewTransition()
    const handleClick = () => navigateTo(`/projects/${nextProject.slug}`)

    const gallery = project.gallery ?? []

    return (
        <main ref={containerRef} className="overflow-hidden">
            <section className="h-screen w-full bg-[#0a0a0a] text-[#f4f4f2]">
                <div className="container h-full w-full flex gap-6 pt-28 pb-14 pl-6 pr-6 md:pl-10 md:pr-10">

                    <div className="firstSegment h-full w-[10%] flex flex-col justify-between">
                        <TextReveal>
                            <h3 className="font-space-grotesk text-[2.5rem] font-medium text-[#f4f4f2]/40">
                                {project.number}
                            </h3>
                        </TextReveal>
                        <div className="hidden md:block w-6 h-px bg-[#f4f4f2]/20" />
                    </div>

                    <div className="secondSegment h-[90%] w-[32%]">
                        <div className="imgDiv h-full w-full overflow-hidden rounded-sm border border-[#f4f4f2]/10">
                            <img
                                ref={imageRef}
                                style={{ clipPath: 'inset(100% 0 0 0)' }}
                                className="h-full scale-[1.4] w-full object-cover grayscale-[10%]"
                                src={project.coverImage}
                                alt={project.title}
                                fetchPriority="high"
                            />
                        </div>
                    </div>

                    <div className="thirdSegment h-[90%] w-[58%] flex flex-col justify-end">
                        <div className="subHeading flex items-center gap-3 mb-4">
                            <TextReveal delay="0.9" splitBy="words">
                                <span className="font-manrope text-xs md:text-sm tracking-[0.2em] uppercase text-[#f4f4f2]/50">
                                    {project.subtitle}
                                </span>
                            </TextReveal>
                            <span className="w-1 h-1 rounded-full bg-[#f4f4f2]/30" />
                            <TextReveal delay="0.9" splitBy="chars">
                                <span className="font-manrope text-xs md:text-sm tracking-[0.2em] text-[#f4f4f2]/50">
                                    {project.year}
                                </span>
                            </TextReveal>
                        </div>

                        <div className="heading">
                            <TextReveal delay="0.9" splitBy="chars">
                                <h1 className="font-space-grotesk font-medium text-[3.2rem] leading-[1.05] tracking-tight">
                                    {project.title}
                                </h1>
                            </TextReveal>
                        </div>

                        <div className="description mt-6 w-[55%] max-w-[520px]">
                            <TextReveal delay="0.9" splitBy="words">
                                <p className="font-manrope text-[1.05rem] leading-[1.5] text-[#f4f4f2]/60 text-balance">
                                    {project.description}
                                </p>
                            </TextReveal>
                        </div>

                        <div className="links flex items-center gap-4 mt-8">
                            {project.liveUrl && (
                                <TextReveal delay="1.1">
                                    
                                     <a   href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-2 font-manrope text-sm tracking-[0.15em] uppercase border border-[#f4f4f2]/30 rounded-full px-6 py-2.5 overflow-hidden transition-colors duration-300 hover:text-[#0a0a0a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f2]/60"
                                    >
                                        <span className="absolute inset-0 bg-[#f4f4f2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                                        <span className="relative z-10">View Live</span>
                                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                    </a>
                                </TextReveal>
                            )}

                            {project.repoUrl && (
                                <TextReveal delay="1.2">
                                    
                                      <a  href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-1.5 font-manrope text-sm tracking-[0.15em] uppercase text-[#f4f4f2]/50 hover:text-[#f4f4f2] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f4f4f2]/60"
                                    >
                                        <span>Source</span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                    </a>
                                </TextReveal>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {gallery.map((elem, index) => (
                <section
                    key={`${project.slug}-gallery-${index}`}
                    className="gallery-section relative h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
                >
                    <div
                        style={{ transformOrigin: 'bottom left' }}
                        className="reveal-panel relative h-[80%] w-[85%] md:w-[70%] rotate-[30deg]"
                    >
                        <img
                            className="h-full w-full object-cover"
                            src={elem}
                            alt={`${project.title} — visual ${index + 1}`}
                            loading="lazy"
                        />
                    </div>

                    <span
                        className="absolute font-space-grotesk font-medium text-[28vw] leading-none text-[#f4f4f2]/[0.04] select-none pointer-events-none"
                        aria-hidden="true"
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </section>
            ))}

            <Footer handleClick={handleClick} nextProject={nextProject} />
        </main>
    )
}

export default ProjectPage