import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/css/styles.css";
import NavigationTop from "./components/navigation/NavigationTop";
import Hero from "./components/hero/Hero";
import Projects from "./components/navigation/pages/Projects";
import Services from "./components/navigation/pages/Services";
import ResumeCV from "./components/navigation/pages/ResumeCV";
import About from "./components/navigation/pages/About";
import Contact from "./components/navigation/pages/Contact";
import Error from "./components/navigation/pages/Error";
export default function App() {
  return (
    <>
      <Router>
        <NavigationTop />
        <Routes>
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Resume' element={<ResumeCV />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Hero />
    </>
  );
}
