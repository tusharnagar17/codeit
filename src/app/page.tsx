'use client'
import NavBar from "@/components/NavBar";
import ThemeChanger from "@/components/ThemeChanger";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return <div className="">
    <NavBar />
    <Home />
    <About />
    <Services />
    {/* <Projects />
    <Contact /> */}
    <Footer />
  </div>
}