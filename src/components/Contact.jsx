import { motion , useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (integrate with EmailJS or similar)
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="sec-title">Get In Touch</h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span>📍</span>
                <span>Kapurthala 144601, India</span>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <span>+91 98728 58089</span>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <a href="mailto:akshya.bal2000@gmail.com">akshya.bal2000@gmail.com</a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/akshya-bal-6b294a309" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/akshya-backend" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact
