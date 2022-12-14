import './App.css';
import Navbarr from './components/Navbarr';
import Banner from './components/Banner';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Banner />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
