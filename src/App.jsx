import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/css/styles.css";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/navigation/pages/contact/Contact";
import About from "./components/navigation/pages/about/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
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
              </>
            }
          />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
