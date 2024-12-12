import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Location from "./components/Location"
import ClientLayoutEffect from "./components/ClientLayoutEffect"

export default function Home() {
  return <div>
    <ClientLayoutEffect/>
    <NavBar/>
    <Hero/>
    <Intro/>
    <Services/>
    <Location/>
    <Footer/>
  </div>;
}