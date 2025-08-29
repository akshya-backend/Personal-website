export const projects = [
  {
    id: 'chatter-box',
    title: 'Chatter Box — Real-Time Chat',
    techs: ['Node.js', 'Socket.io', 'Kafka', 'Redis', 'Docker', 'Winston', 'Helmet', 'EJS', 'Multer', 'Express', 'Cloudinary', 'MongoDB', 'HTML', 'CSS'],
    description: 'Scalable messaging with Socket.IO, Kafka queues, and Redis session tracking.',
    details: [
      "Real-time messaging with Socket.IO",
      "Kafka + Redis message queue",
      "Secure login with JWT + sessions",
      "Email OTP verification",
      "File/image uploads via Multer + Cloudinary",
      "PDF and media support",
      "Helmet, rate-limiting, validation",
      "Logging with Winston",
      "Docker Compose support for full stack"

    ],
    github: 'https://github.com/akshya-backend/chatter-box-',
    featured: true
  },{
    id:"rate-limiter",
    title: "Rate Limiter",
    techs: ["Node.js", "Redis", "Express"],
    description: "A simple rate limiter using Redis to store request token algorithms.",
    details: [
      "Per-route, per-user/IP rate limiting",
      "Redis-backed token bucket for distributed environments",
      "Failover to in-memory buckets if Redis is down",
      "Configurable fail-open or fail-closed behavior"
    ],
    github: "https://github.com/akshya-backend/rate-limiter",
    featured: true
  },{
    id:"Password-generator",
    title: "Password Generator",
    techs: ["Python"],
    description: "A simple password generator with user-defined criteria.",
    details: [
      "Customizable password length and character types",
    ],
    github: "https://github.com/akshya-backend/password-generator-",
    featured: false
  },{
    id:"Mini Library Management System",
    title: "Mini Library Management System",
    techs: ["Python"],
    description: "A simple library management system.",
    details: [
       "Add new books with multiple copies",
      "Add new members",
      "Borrow books (with 14-day due date)",
      "Return books (checks for late returns)",
      "View all books and members",
      "Saves data to a JSON file (library.json) for persistence",
      "Simple console logging of actions and current library data"

          ],
    github: "https://github.com/akshya-backend/mini-library-cli-based",
    featured: false
  },{
    id:"Hotel-Management-System",
    title: "Hotel Management System",
    techs: ["Node.js", "Fastify", "MySQL", "Sequelize","JWT","Joi","Winston","Jest"],
    description: "A simple hotel management system.",
    details: [
      "User registration and login",
      "Secure authentication with JWT",
      "Room listing and availability",
      "Booking management",
      "Admin functionalities",
      "Rate limiting, input validation, logging, and more"
    ],
    github: "https://github.com/akshya-backend/Hotel-Mangement-system",
    featured: false
  },{
    id:"sorting-visualizer",
    title: "Sorting Visualizer",
    techs: ["JavaScript", "HTML", "CSS"],
    description: "A web-based tool to visualize sorting algorithms with speed and length control.",
    details: [
      "Advanced Animations - Smooth, physics-inspired bar movements",
      "State-based Coloring - Visual feedback for different algorithm states",
      "Real-time Metrics - Live tracking of comparisons, swaps, and steps",
      "Professional UI - Modern design with gradient backgrounds and shadows",
      "Responsive Design - Works perfectly on all screen sizes"
    ],
    github: "https://github.com/akshya-backend/Sorting-Visualizer",
    featured: true
  }
  ,{
    id:"Large-Csv-Processor",
    title: "Large CSV Processor",
    techs: ["Nodejs", "Express","Csv Parser","Exceljs","Winston"],
    description: "A Node.js app to efficiently process large CSV files with data cleaning and transformation.",
    details: [
      "Handles CSV files up to 3GB+ without crashing",
      "Streams processing to avoid memory spikes",
      "Converts to JSON, CSV, Excel formats",
      "Automatic progress logging and memory usage",
      "Graceful error handling and cleanup"
    ],
    github: "https://github.com/akshya-backend/Large-Csv-Processor",
    featured: true
  },{
    id:"automation-upfitter-scraper",
    title: "Automation Upfitter Scraper",
    techs: ["Node.js", "Puppeteer", "Serper","Express"],
    description: "A web scraper for Automation Upfitter using Puppeteer and Cheerio.",
    details: [
      "Headless browser automation with Puppeteer",
      "Serper API to search for upfitters",
      "Google Sheets Integration for storing results",
      "Custom Filtering to exclude irrelevant domains and file types",
      "Rate-Limiting and Delays to avoid hitting external services too frequently"
    ],
    github: "https://github.com/akshya-backend/automation-upfitter-scraper",
    featured: true
  },{
    id:"E-commerce-Website",
    title: "E-commerce Website",
    techs: ["Node.js", "Express", "MongoDB", "EJS","Multer","Nodemailer","Cloudinary"],
    description: "A full-stack e-commerce website.",
    details: [
      "User Authentication: Secure registration and login system.",
      "User Profile: Can Change Profile Info and change password.",
      "Shopping Cart: Add products to your cart and manage your selections.",
      "Checkout: Fast and secure payment processing with Stripe.",
      "Order History: Keep track of your orders.",
      "Invoice:Invoice of orders through gmail.",
      "Image Uploads: Upload product images with Cloudinary integration."
    ],
    github: "https://github.com/akshya-backend/e-commerce-website",
    featured: true
  },{
    id:"Weather-App",
    title: "Weather App",
    techs: ["Node.js", "Express", "Axios", "EJS"],
    description: "A simple weather application.",
    details: [
      "Fetch weather data from a public API",
      "Display current weather and forecasts",
      "Search functionality for different locations"
    ],
    github: "https://github.com/akshya-backend/weather-web-app",
    featured: false
  }

]

