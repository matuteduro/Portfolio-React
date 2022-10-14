import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbarr';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Banner />
    </div>
  );
}

export default App;
