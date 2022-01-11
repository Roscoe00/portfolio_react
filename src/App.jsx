import './App.scss';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './containers/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
