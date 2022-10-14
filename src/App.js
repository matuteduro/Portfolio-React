import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbarr';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Banner />
      <Skills/>
    </div>
  );
}

export default App;
