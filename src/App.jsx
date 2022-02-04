import './App.scss';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Projects from './containers/Projects/Projects';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -92;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <Router>
      <div className="App">
        <Navigation scrollWithOffset={scrollWithOffset} />
        <Home scrollWithOffset={scrollWithOffset} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
