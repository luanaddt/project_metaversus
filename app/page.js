import About from "@/components/sections/About"
import Explore from "@/components/sections/Explore"
import Feedback from "@/components/sections/Feedback"
import Footer from "@/components/footer/Footer"
import GetStarted from "@/components/sections/GetStarted"
import Hero from "@/components/sections/Hero"
import Insights from "@/components/sections/Insights"
import Navbar from "@/components/navbar/Navbar"
import WhatsNew from "@/components/sections/WhatsNew"
import World from "@/components/sections/World"

const Home = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Home