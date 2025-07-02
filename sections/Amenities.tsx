'use client'

import { motion } from 'framer-motion'
import { 
  Wifi, 
  Car, 
  Shield, 
  Waves, 
  Dumbbell, 
  Coffee, 
  TreePine, 
  Utensils,
  Wind,
  Zap,
  Camera,
  Users
} from 'lucide-react'

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Fiber optic connectivity throughout'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Premium parking with valet service'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security and concierge'
    },
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Rooftop pool with panoramic views'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment'
    },
    {
      icon: Coffee,
      title: 'Business Lounge',
      description: 'Executive workspace and meeting rooms'
    },
    {
      icon: TreePine,
      title: 'Garden Terrace',
      description: 'Landscaped outdoor spaces'
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'On-site restaurant and room service'
    },
    {
      icon: Wind,
      title: 'Climate Control',
      description: 'Smart HVAC system in every unit'
    },
    {
      icon: Zap,
      title: 'Smart Home',
      description: 'Automated lighting and controls'
    },
    {
      icon: Camera,
      title: 'Surveillance',
      description: 'Advanced security monitoring'
    },
    {
      icon: Users,
      title: 'Event Space',
      description: 'Private venues for gatherings'
    }
  ]

  return (
    <section id="amenities" className="bg-royal-navy text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled luxury with our comprehensive suite of premium amenities 
            designed to elevate your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-royal-gold rounded-full mb-4"
              >
                <amenity.icon className="h-8 w-8 text-royal-navy" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">
                {amenity.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-4"
          >
            Experience Our Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Amenities