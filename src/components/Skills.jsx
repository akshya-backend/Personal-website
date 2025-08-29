import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import skills from '../data/skills'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })


  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="sec-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((element, Index) => (
            <motion.div
              key={Index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: Index * 0.1, duration: 0.6 }}
            >
              <h3 
              style={{
                color:"var(--text)"
              }}>{element.category}</h3>
              <div className="skills-tags">
                {element.items.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: (Index * 0.1) + (index * 0.05), duration: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
