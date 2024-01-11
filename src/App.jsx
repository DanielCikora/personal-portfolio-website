import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/css/styles.css";
import NavigationTop from "./components/navigation/NavigationTop";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/projects/Projects";
import Services from "./components/navigation/pages/services/Services";
import Contact from "./components/navigation/pages/contact/Contact";
import About from "./components/navigation/pages/about/About";
export default function App() {
  return (
    <>
      <Router>
        <NavigationTop />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
