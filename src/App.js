import './App.css';
import Hero from './components/hero/Hero';
import MainMenu from './components/main-menu/MainMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Treninzi from './components/treninzi/Treninzi';
import Trener from './components/trener/Trener';
import Forma from './components/forma/Forma';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <MainMenu />
        <Hero />
        <Treninzi />
        <Trener />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
