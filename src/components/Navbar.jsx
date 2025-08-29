import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
   const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav 
      className={`navbar`}
      style={{ backgroundColor: darkMode ? "" : 'rgb(235 228 251)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-wrap">
        <span className="logo">Akshya Bal</span>
        <ul className="nav-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
