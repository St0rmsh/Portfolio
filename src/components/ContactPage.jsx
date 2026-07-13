"use client"
import React, { useState } from 'react'
import TextReveal from '@/components/TextReveal'

const socials = [
    { label: 'GitHub', href: 'https://github.com/St0rmsh' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sujit-kumar-924918384' },
]

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
         if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })

        if (!res.ok) throw new Error('Request failed')

        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
    } catch (err) {
        console.error(err)
        setStatus('error')
    }
    }

    const gmailComposeUrl = (() => {
    const params = new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: 'sujitku5619@gmail.com',
        su: 'Project inquiry',
        body: "Hi Sujit,\n\nI'd like to talk about a project...",
    })
    return `https://mail.google.com/mail/?${params.toString()}`
})()

    return (
        <main className="w-full bg-[#0a0a0a] text-[#f4f4f2] overflow-hidden">

            {/* section 1 — the big ask */}
            <section className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 text-center">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50 mb-6 block">
                        Get in touch
                    </span>
                </TextReveal>

                <TextReveal splitBy="chars">
                    
                       <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer"
                        className="font-space-grotesk font-medium text-[9vw] md:text-[4.5rem] leading-[1.05] tracking-tight hover:opacity-70 transition-opacity duration-300 break-all"
                    >
                        sujitku5619@gmail.com
                    </a>
                </TextReveal>

                <TextReveal delay="0.2">
                    <p className="font-manrope text-[1.05rem] text-[#f4f4f2]/50 mt-8 max-w-md">
                        Open to freelance work, full-time roles, and interesting problems.
                        Click above, or use the form below.
                    </p>
                </TextReveal>
            </section>

            <div className="w-full h-px bg-[#f4f4f2]/10" />

            {/* section 2 — form + socials */}
            <section className="min-h-screen w-full flex items-center px-6 md:px-16 py-24">
                <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-16">

                    {/* form */}
                    <div className="flex flex-col gap-8 max-w-xl">
                        <div>
                            <label className="font-manrope text-xs tracking-[0.2em] uppercase text-[#f4f4f2]/40 mb-2 block">
                                Name
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full bg-transparent border-b border-[#f4f4f2]/20 focus:border-[#f4f4f2] outline-none py-3 font-manrope text-[1.1rem] transition-colors duration-300 placeholder:text-[#f4f4f2]/30"
                            />
                        </div>

                        <div>
                            <label className="font-manrope text-xs tracking-[0.2em] uppercase text-[#f4f4f2]/40 mb-2 block">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full bg-transparent border-b border-[#f4f4f2]/20 focus:border-[#f4f4f2] outline-none py-3 font-manrope text-[1.1rem] transition-colors duration-300 placeholder:text-[#f4f4f2]/30"
                            />
                        </div>

                        <div>
                            <label className="font-manrope text-xs tracking-[0.2em] uppercase text-[#f4f4f2]/40 mb-2 block">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project"
                                rows={4}
                                className="w-full bg-transparent border-b border-[#f4f4f2]/20 focus:border-[#f4f4f2] outline-none py-3 font-manrope text-[1.1rem] transition-colors duration-300 placeholder:text-[#f4f4f2]/30 resize-none"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={status === 'sending'}
                            className="self-start font-manrope text-sm tracking-[0.2em] uppercase border border-[#f4f4f2]/30 rounded-full px-8 py-3 hover:bg-[#f4f4f2] hover:text-[#0a0a0a] transition-colors duration-300 disabled:opacity-40"
                        >
                            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
                        </button>

                        {status === 'error' && (
                            <p className="font-manrope text-sm text-[#f4f4f2]/50">
                                Something went wrong — try emailing directly instead.
                            </p>
                        )}
                    </div>

                    {/* socials + location */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="font-manrope text-xs tracking-[0.25em] uppercase text-[#f4f4f2]/40 mb-6 block">
                                Elsewhere
                            </span>
                            <ul className="space-y-3">
                                {socials.map((s) => (
                                    <li key={s.label}>
                                        <a
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group font-space-grotesk text-[1.3rem] hover:text-[#f4f4f2]/60 transition-colors duration-300 inline-flex items-center gap-2"
                                        >
                                            {s.label}
                                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-16 md:mt-0">
                            <span className="font-manrope text-xs tracking-[0.25em] uppercase text-[#f4f4f2]/40 mb-2 block">
                                Based in
                            </span>
                            <p className="font-manrope text-[1.1rem] text-[#f4f4f2]/70">
                                Guwahati, India — working with clients worldwide
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default ContactPage