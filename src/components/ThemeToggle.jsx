import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle day/night theme"
            className="w-10 h-10 flex items-center justify-center rounded-full
      border border-theme bg-white/5 hover:bg-white/10
      text-theme-secondary hover:text-theme-primary transition-colors"
        >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
    )
}

export default ThemeToggle