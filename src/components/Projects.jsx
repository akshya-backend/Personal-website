import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="sec-title">Highlighted Projects</h2>
        
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="subsection-title">Other Projects</h3>
            <div className="projects-grid secondary">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index + featuredProjects.length}
                  isInView={isInView}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.section>
  )
}

export default Projects
