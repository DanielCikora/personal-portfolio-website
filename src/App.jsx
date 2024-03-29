import "../src/components/scss/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
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
                <Hero />
                <Services />
                <ProjectsPreview />
              </>
            }
          />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
