"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TextReveal from './TextReveal'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY

            // always show near the top, and while the mobile menu is open
            if (currentY < 80 || menuOpen) {
                setHidden(false)
            } else {
                setHidden(currentY > lastScrollY)
            }
            setLastScrollY(currentY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, menuOpen])

    // close the mobile menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <div
            className={`w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#f4f4f2]/10 px-6 md:px-[1.7rem] fixed top-0 left-0 h-[8vh] z-50 flex items-center justify-between transition-transform duration-400 ease-out ${
                hidden ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <div className="leftNameSide">
                <TextReveal>
                    <Link href="/">
                        <h3 className="font-space-grotesk text-[1.1rem] md:text-[1.3rem] tracking-tight text-[#f4f4f2]">
                            Sujit Kumar
                        </h3>
                    </Link>
                </TextReveal>
            </div>

            {/* desktop links */}
            <div className="rightLinkSide hidden md:flex items-center gap-8 md:gap-10">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <TextReveal key={link.label}>
                            <Link
                                href={link.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`group relative font-manrope text-[0.85rem] tracking-[0.15em] uppercase transition-colors duration-300 ${
                                    isActive ? 'text-[#f4f4f2]' : 'text-[#f4f4f2]/70 hover:text-[#f4f4f2]'
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-px bg-[#f4f4f2] transition-all duration-300 ease-out ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        </TextReveal>
                    )
                })}
            </div>

            {/* mobile menu toggle */}
            <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            >
                <span
                    className={`block w-6 h-px bg-[#f4f4f2] transition-transform duration-300 ${
                        menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                    }`}
                />
                <span
                    className={`block w-6 h-px bg-[#f4f4f2] transition-opacity duration-300 ${
                        menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                    className={`block w-6 h-px bg-[#f4f4f2] transition-transform duration-300 ${
                        menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                    }`}
                />
            </button>

            {/* mobile menu overlay */}
            <div
                className={`md:hidden fixed inset-0 top-[8vh] bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`font-space-grotesk text-[2rem] tracking-tight transition-colors duration-300 ${
                                isActive ? 'text-[#f4f4f2]' : 'text-[#f4f4f2]/60'
                            }`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar