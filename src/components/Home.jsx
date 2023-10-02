import Navbar from "../layouts/Navbar";
import Features from "../pages/Features";
import Hero from "../pages/Hero";
import Works from "../pages/Works";
import Footer from '../layouts/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Features/>
        <Works/>
        <Footer/>
    </div>
  )
}
