import Hero from '../sections/Hero'
import About from '../sections/About'
import FloorPlans from '../sections/FloorPlans'
import ImageCarousel from '../sections/ImageCarousel'
import Amenities from '../sections/Amenities'
import Location from '../sections/Location'
import Contact from '../sections/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FloorPlans />
      <ImageCarousel />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}