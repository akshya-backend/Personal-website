import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <p>&copy; 2025 Akshya Bal .</p>
        <p>Built with React </p>
      </div>
    </motion.footer>
  )
}

export default Footer
