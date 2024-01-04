import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/css/styles.css";
import NavigationTop from "./components/navigation/NavigationTop";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/Projects";
import Services from "./components/navigation/pages/Services";
import Contact from "./components/navigation/pages/Contact";
import ResumeCV from "./components/navigation/pages/ResumeCV";
import About from "./components/navigation/pages/About";
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
          <Route path='/Resume' element={<ResumeCV />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
