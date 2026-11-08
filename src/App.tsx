import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <div className="smoke" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
