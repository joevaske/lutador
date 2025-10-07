import './App.css';

import MainMenu from './components/main-menu/MainMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';
import RasporedTreninga from './components/raspored-treninga/RasporedTreninga';
import HomePage from './components/pages/HomePage';
import Treninzi from './components/pages/treninzi/Treninzi';
/* import MatejaValjarevicBiografija from './components/trener/MatejaValjarevicBiografija'; */

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/raspored-treninga' element={<RasporedTreninga />} />
          <Route path='/treninzi' element={<Treninzi />} />
        </Routes>
        <MainMenu />

        <Contact />
        <Footer />
        {/*  <MatejaValjarevicBiografija /> */}
        {/*   <Treninzi />
       
        <Contact />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
