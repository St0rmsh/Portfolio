"use client"

import gsap from '@/libs/gsap'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const STRIP_COUNT = 7

// module-level, not per-component state — this must survive the unmount
// of whichever component called navigateTo, since router.push() is exactly
// what unmounts that component mid-transition.
let isAnimating = false
let activeTween = null

const createStrips = () => {
    if (typeof document === 'undefined') return null

    const overlay = document.createElement('div')
    overlay.id = 'page-transition-overlay'
    overlay.style.cssText = `
        position: fixed;
        z-index: 9999;
        inset: 0;
        pointer-events: auto;
        display: flex;
    `

    const strips = []
    for (let i = 0; i < STRIP_COUNT; i++) {
        const strip = document.createElement('div')
        strip.className = 'page-transition-strip'
        strip.style.cssText = `
            flex: 1;
            height: 100%;
            background-color: #010101;
        `
        overlay.appendChild(strip)
        strips.push(strip)
    }

    document.body.appendChild(overlay)
    gsap.set(strips, { scaleY: 0, transformOrigin: 'bottom' })

    return { overlay, strips }
}

const removeOverlay = () => {
    const element = document.getElementById('page-transition-overlay')
    if (element) element.remove()
}

const useViewTransition = () => {
    const router = useRouter()

    // defensive cleanup for stray overlays left behind by dev-mode fast
    // refresh — only runs if nothing is genuinely mid-transition
    useEffect(() => {
        if (!isAnimating) {
            removeOverlay()
        }
    }, [])

    const navigateTo = useCallback((href) => {
        if (isAnimating) return

        const prefersReducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            router.push(href)
            return
        }

        const created = createStrips()
        if (!created) {
            router.push(href)
            return
        }

        const { strips } = created
        isAnimating = true

        activeTween = gsap.to(strips, {
            scaleY: 1,
            duration: 0.5,
            ease: 'power3.inOut',
            stagger: { each: 0.06, from: 'random' },
            onComplete: () => {
                router.push(href)

                activeTween = gsap.to(strips, {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 0.5,
                    ease: 'power3.inOut',
                    delay: 0.3,
                    stagger: { each: 0.06, from: 'random' },
                    onComplete: () => {
                        removeOverlay()
                        isAnimating = false
                        activeTween = null
                    },
                })
            },
        })
    }, [router])

    return { navigateTo }
}

export default useViewTransition