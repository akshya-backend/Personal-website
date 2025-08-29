import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projects'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <motion.section 
      id="about" 
      className="about-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="sec-title">Professional Summary</h2>
        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Enthusiastic backend developer with a strong foundation in JavaScript and Node.js.
            Skilled in building scalable APIs, server-side logic, and automation.
            Quick learner with clean coding habits and a passion for backend engineering and DevOps.
          </motion.p>
          
          <motion.div
            className="stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="stat">
              <h3>{ projects.length}</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>Fresher</h3>
              <p>MERN Stack Developer</p>
            </div>
            <div className="stat">
              <h3>Open To Work</h3>
              <p>Remote / On-site</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
