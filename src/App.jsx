import "../src/components/scss/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlowLoad from "./components/micro-components/SlowLoad";
import Navigation from "./components/navigation/Navigation";
import DarkMode from "./components/micro-components/DarkMode";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/navigation/pages/contact/Contact";
import About from "./components/navigation/pages/about/About";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      <Router>
        <SlowLoad>
          <Navigation />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <DarkMode />
                  <Hero />
                  <Services />
                  <Skills />
                </>
              }
            />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
          </Routes>
          <Footer />
        </SlowLoad>
      </Router>
    </>
  );
}
