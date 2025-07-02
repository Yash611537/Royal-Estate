'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bed, Bath, Square, Car } from 'lucide-react'

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState(0)

  const floorPlans = [
    {
      id: 1,
      name: 'The Penthouse',
      type: 'Luxury Suite',
      bedrooms: 4,
      bathrooms: 3,
      area: 3500,
      parking: 2,
      price: '$2,500,000',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Private Elevator', 'Rooftop Terrace', 'Smart Home System', 'Wine Cellar']
    },
    {
      id: 2,
      name: 'The Executive',
      type: 'Premium Residence',
      bedrooms: 3,
      bathrooms: 2,
      area: 2800,
      parking: 2,
      price: '$1,800,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Gourmet Kitchen', 'Master Suite', 'Home Office', 'Private Balcony']
    },
    {
      id: 3,
      name: 'The Diplomat',
      type: 'Elite Living',
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      parking: 3,
      price: '$3,200,000',
      image: 'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Grand Foyer', 'Library', 'Guest Suite', 'Private Garden']
    }
  ]

  return (
    <section id="floor-plans" className="bg-royal-cream">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-royal-navy mb-6">
            Exquisite Floor Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thoughtfully designed spaces that blend luxury with functionality, 
            creating the perfect environment for sophisticated living.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {floorPlans.map((plan, index) => (
            <motion.button
              key={plan.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-royal-gold text-royal-navy shadow-lg'
                  : 'bg-white text-royal-charcoal hover:bg-royal-gold/10'
              }`}
            >
              {plan.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Floor Plan Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={floorPlans[activeTab].image}
                alt={floorPlans[activeTab].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-royal-gold text-royal-navy px-4 py-2 rounded-lg font-semibold">
                {floorPlans[activeTab].type}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-playfair font-bold text-royal-navy mb-2">
                  {floorPlans[activeTab].name}
                </h3>
                <div className="text-2xl font-bold text-royal-gold mb-6">
                  {floorPlans[activeTab].price}
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Bed className="h-6 w-6 text-royal-gold" />
                  <div>
                    <div className="font-semibold text-royal-navy">{floorPlans[activeTab].bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="h-6 w-6 text-royal-gold" />
                  <div>
                    <div className="font-semibold text-royal-navy">{floorPlans[activeTab].bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Square className="h-6 w-6 text-royal-gold" />
                  <div>
                    <div className="font-semibold text-royal-navy">{floorPlans[activeTab].area} sq ft</div>
                    <div className="text-sm text-gray-600">Living Area</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6 text-royal-gold" />
                  <div>
                    <div className="font-semibold text-royal-navy">{floorPlans[activeTab].parking}</div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-royal-navy mb-4">Premium Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {floorPlans[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
              >
                Schedule Private Tour
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FloorPlans