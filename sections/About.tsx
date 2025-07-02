'use client'

import { motion } from 'framer-motion'
import { Award, Users, Home, Star } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Home, number: '500+', label: 'Luxury Properties' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="bg-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Interior"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-navy/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-2 bg-royal-gold p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-navy">25+</div>
                <div className="text-royal-navy font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-playfair font-bold text-royal-navy mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Crafting Dreams Into
                <span className="block text-royal-gold">Reality</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                For over two decades, Royal Estates has been the epitome of luxury real estate excellence. 
                We specialize in curating the most prestigious properties for discerning clients who 
                appreciate the finer things in life.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Our commitment to excellence, attention to detail, and personalized service has made us 
                the trusted choice for luxury property investments and acquisitions worldwide.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-royal-cream border border-royal-gold/20"
                >
                  <stat.icon className="h-8 w-8 text-royal-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-royal-navy">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="btn-primary"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About