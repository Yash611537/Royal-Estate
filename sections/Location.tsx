'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Car, Train, Plane, ShoppingBag } from 'lucide-react'

const Location = () => {
  const locationFeatures = [
    {
      icon: ShoppingBag,
      title: 'Premium Shopping',
      description: '5 minutes to luxury retail district',
      distance: '0.5 miles'
    },
    {
      icon: Car,
      title: 'Highway Access',
      description: 'Direct access to major highways',
      distance: '2 minutes'
    },
    {
      icon: Train,
      title: 'Metro Station',
      description: 'Walking distance to metro',
      distance: '0.3 miles'
    },
    {
      icon: Plane,
      title: 'International Airport',
      description: 'Quick access to airport',
      distance: '25 minutes'
    }
  ]

  return (
    <section id="location" className="bg-royal-cream">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-royal-navy mb-6">
            Prime Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned in the heart of the city's most prestigious district, 
            offering unparalleled access to luxury amenities and cultural landmarks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-royal-navy to-royal-gold flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold mb-2">Interactive Map</h3>
                  <p className="text-lg opacity-90">123 Luxury Avenue, Premium District</p>
                  <p className="text-sm opacity-75 mt-2">Click to view in Google Maps</p>
                </div>
                
                {/* Floating Location Pin */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-6 h-6 bg-royal-gold rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              </div>
              
              {/* Address Info */}
              <div className="p-6 bg-white">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-royal-gold" />
                  <div>
                    <div className="font-semibold text-royal-navy">Royal Estates Tower</div>
                    <div className="text-gray-600">123 Luxury Avenue, Premium District</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Location Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-playfair font-bold text-royal-navy mb-6">
                Everything Within Reach
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our prime location offers unmatched convenience with world-class dining, 
                shopping, entertainment, and business districts all within minutes of your doorstep.
              </p>
            </div>

            <div className="space-y-6">
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-gold/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-royal-gold" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-royal-navy">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-1 text-royal-gold">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{feature.distance}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-royal-navy text-white p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-3">Neighborhood Highlights</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Michelin-starred restaurants within walking distance</li>
                <li>• World-renowned art galleries and museums nearby</li>
                <li>• Exclusive private clubs and wellness centers</li>
                <li>• Top-rated schools and universities in the area</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location