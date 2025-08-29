import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
        <title>Akshya Bal - Backend Developer & DevOps Enthusiast</title>
        <meta name="description" content="Backend developer specializing in Node.js, Docker, and distributed systems. Building scalable APIs and microservices." />
      
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="accent">Akshya Bal</span>
          </motion.h1>
          
          <motion.p 
            className="tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Backend Developer & DevOps Enthusiast
          </motion.p>
          
          <motion.p 
            className="blurb"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
                I design robust APIs, streamline data workflows, and deploy scalable systems using Node.js, Docker, and modern distributed architecture.
           </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button onClick={scrollToProjects} className="btn primary">
              View Work
            </button>
            <a href="mailto:akshya.bal2000@gmail.com" className="btn outline">
              Email Me
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero
