"use client"
import TextReveal from '@/components/TextReveal'
import React from 'react'

const stack = [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'GSAP', 'Three.js / R3F'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Redis'] },
    { label: 'Infra', items: ['Kubernetes', 'Docker', 'Skaffold', 'RabbitMQ'] },
]

const building = [
    {
        name: 'Streamline',
        role: 'YouTube-style video platform with AI fact-checking',
        detail: 'Watches videos alongside you and flags misleading or false claims as they happen, by reading both the visuals and the spoken audio — not just the title or description.',
        status: 'In progress',
    },
    {
        name: 'Zentro',
        role: 'Backend infrastructure for modern apps',
        detail: 'Handles auth and account security the way a production SaaS would: OTP email verification, JWT sessions, and expiring codes, all wrapped in a clean, testable backend architecture.',
        status: 'In progress',
    },
    {
        name: 'Snitch',
        role: 'Peer-to-peer marketplace app',
        detail: 'Lets anyone become a buyer or seller from the same account, with a dark, glassy interface that feels closer to a members-only drop than a standard storefront.',
        status: 'In progress',
    },
    {
        name: 'This portfolio',
        role: 'Personal site',
        detail: 'Turns scrolling itself into part of the story — text and images reveal in sync with how fast or slow you scroll, instead of just fading in on a timer.',
        status: 'Shipped',
    },
    {
        name: 'Dog 3D animation',
        role: '3D animation piece',
        detail: 'A fully modeled, animated dog scene built in the browser — a hands-on exercise in getting real 3D work running smoothly on the web.',
        status: 'Shipped',
    },
]
const AboutPage = () => {
  return (
    <main className="w-full bg-[#0a0a0a] text-[#f4f4f2] overflow-hidden">

        {/* section 1 — statement */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-16">
            <TextReveal>
                <div className="flex items-center gap-2 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7cff9b] animate-pulse" />
                    <span className="font-manrope text-xs tracking-[0.2em] uppercase text-[#f4f4f2]/50">
                        Currently available for freelance work
                    </span>
                </div>
            </TextReveal>

            <div className="max-w-4xl">
                <TextReveal splitBy="words">
                    <h1 className="font-space-grotesk font-medium text-[8vw] md:text-[4.5rem] leading-[1.05] tracking-tight text-center">
                        I build interfaces that feel considered, not just functional.
                    </h1>
                </TextReveal>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 2 — background */}
        <section className="h-screen w-full flex items-center px-6 md:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-[0.3fr_1fr] gap-10 items-start">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                        01 — Background
                    </span>
                </TextReveal>

                <TextReveal splitBy="words" delay="0.15">
                    <p className="font-manrope text-[1.4rem] md:text-[1.8rem] leading-[1.4] text-[#f4f4f2]/80 max-w-3xl">
                        I'm Sujit Kumar — a full-stack developer working across product UI, backend
                        services, and cloud-native infrastructure. My work spans everything
                        from designing motion-driven interfaces to standing up Kubernetes
                        microservices from scratch. I like projects that force me to go deep:
                        debugging a Redis TTL edge case one day, tuning a GSAP loop seam the next.
                    </p>
                </TextReveal>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 3 — toolkit */}
        <section className="h-screen w-full flex items-center px-6 md:px-16">
            <div className="w-full">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50 mb-10 block">
                        02 — Toolkit
                    </span>
                </TextReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                    {stack.map((group) => (
                        <div key={group.label} className="border-t border-[#f4f4f2]/10 pt-6">
                            <TextReveal>
                                <h3 className="font-space-grotesk text-[1.6rem] mb-5">
                                    {group.label}
                                </h3>
                            </TextReveal>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-[#f4f4f2]/30 flex-shrink-0" />
                                        <TextReveal splitBy="words">
                                            <span className="font-manrope text-[1.05rem] text-[#f4f4f2]/60">
                                                {item}
                                            </span>
                                        </TextReveal>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 4 — currently building (the signature section) */}
        <section className="h-screen w-full flex items-center px-6 md:px-16">
            <div className="w-full">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50 mb-10 block">
                        03 — Right now
                    </span>
                </TextReveal>

                <div className="flex flex-col mt-4">
                    {building.map((b, i) => (
                        <div
                            key={b.name}
                            className="flex items-center justify-between py-6 border-b border-[#f4f4f2]/10 group"
                        >
                            <div className="flex items-baseline gap-6">
                                <TextReveal>
                                    <span className="font-manrope text-sm text-[#f4f4f2]/30">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </TextReveal>
                                <div>
                                    <TextReveal splitBy="words">
                                        <h3 className="font-space-grotesk text-[1.8rem] md:text-[2.2rem] tracking-tight group-hover:text-[#f4f4f2] transition-colors duration-300">
                                            {b.name}
                                        </h3>
                                    </TextReveal>
                                    <TextReveal splitBy="words" delay="0.1">
                                        <p className="font-manrope text-sm text-[#f4f4f2]/40 mt-1">
                                            {b.role}
                                        </p>
                                    </TextReveal>
                                </div>
                            </div>
                            <TextReveal>
                                <span className="font-manrope text-xs tracking-[0.15em] uppercase text-[#f4f4f2]/40 whitespace-nowrap">
                                    {b.status}
                                </span>
                            </TextReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 5 — closing / CTA */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 text-center">
            <TextReveal splitBy="chars">
                <h2 className="font-space-grotesk font-medium text-[7vw] md:text-[3.5rem] leading-[1.1] tracking-tight mb-6">
                    Let's build something considered.
                </h2>
            </TextReveal>
            <TextReveal delay="0.2">
                
                   <a href="/contact"
                    className="font-manrope text-sm tracking-[0.2em] uppercase border border-[#f4f4f2]/30 rounded-full px-8 py-3 hover:bg-[#f4f4f2] hover:text-[#0a0a0a] transition-colors duration-300"
                >
                    Get in touch
                </a>
            </TextReveal>
        </section>

    </main>
  )
}

export default AboutPage