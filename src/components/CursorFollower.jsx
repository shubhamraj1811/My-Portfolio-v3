import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

function CursorFollower() {
    const dotRef = useRef(null)
    const posRef = useRef({ x: 0, y: 0 })
    const renderedRef = useRef({ x: 0, y: 0 })
    const { theme } = useTheme()

    useEffect(() => {
        // skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        const handleMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMove)

        let raf
        const animate = () => {
            const dot = dotRef.current
            if (dot) {
                renderedRef.current.x += (posRef.current.x - renderedRef.current.x) * 0.2
                renderedRef.current.y += (posRef.current.y - renderedRef.current.y) * 0.2
                dot.style.transform = `translate(${renderedRef.current.x}px, ${renderedRef.current.y}px) translate(-50%, -50%)`
            }
            raf = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('mousemove', handleMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={dotRef}
            className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] hidden sm:block
      ${theme === 'dark'
                    ? 'bg-purple-300 shadow-[0_0_18px_6px_rgba(196,181,253,0.55)]'
                    : 'bg-purple-700 shadow-[0_0_12px_4px_rgba(109,40,217,0.35)]'}`}
        />
    )
}

export default CursorFollower