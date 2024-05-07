import "../src/components/scss/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlowLoad from "./components/micro-components/SlowLoad";
import Navigation from "./components/navigation/Navigation";
import DarkMode from "./components/micro-components/DarkMode";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/projects/Projects";
import Services from "./components/services/Services";
import ProjectsPreview from "./components/projects-preview/ProjectsPreview";
import Contact from "./components/navigation/pages/contact/Contact";
import About from "./components/navigation/pages/about/About";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <DarkMode />
                <SlowLoad>
                  <Hero />
                  <Services />
                  <ProjectsPreview />
                </SlowLoad>
              </>
            }
          />
          <Route
            path='/Projects'
            element={
              <SlowLoad>
                <Projects />
              </SlowLoad>
            }
          />
          <Route
            path='/Contact'
            element={
              <SlowLoad>
                <Contact />
              </SlowLoad>
            }
          />
          <Route
            path='/About'
            element={
              <SlowLoad>
                <About />
              </SlowLoad>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
