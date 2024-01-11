import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className='sticky'>
        <Navbar />
      </div>
      <div>
        <Hero />
        <Skills />
        <Projects />
        <Articles />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
