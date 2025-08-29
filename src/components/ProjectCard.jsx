import { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index, isInView }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      className={`card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="card-header">
        <h3>{project.title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="expand-btn"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="expand-icon"
          >
            +
          </motion.div>
        </button>
      </div>

      <div className="tech-row">
        {project.techs.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <p className="card-description">{project.description}</p>

      <motion.div 
        className="card-details"
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="details-list">
          {project.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        
        <div className="card-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn outline small"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn primary small"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
