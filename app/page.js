import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Nosotros from '../components/Nosotros'
import Mision from '../components/Mision'
import PropuestaValor from '../components/PropuestaValor'
import Vision from '../components/Vision'
import Seguros from '../components/Seguros'
import Servicios from '../components/Servicios'
import Siniestros from '../components/Siniestros'
import Cobertura from '../components/Cobertura'
import Partners from '../components/Partners'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import AOSInit from '../components/AOSInit'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Hero />
      <Nosotros />
      <Mision />
      <PropuestaValor />
      <Vision />
      <Seguros />
      <Servicios />
      <Siniestros />
      <Cobertura />
      <Partners />
      <Contacto />
      <Footer />
      <BackToTop />
    </>
  )
}