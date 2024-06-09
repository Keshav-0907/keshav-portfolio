import "./App.css";
import Articles from "./pages/Articles";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import { useState } from "react";
import { Moon } from "lucide-react";
import Projects from "./pages/Projects";
import Skills2 from "./pages/Skills2";


function App() {
  const [colorMode, setColorMode] = useState('dark')

  const toggleColor = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }
  return (
    <div className={`relative ${colorMode === 'dark' ? ('bg-[#141414] text-white') : ('bg-white')}`}>
      <div className="sticky">
        <Navbar colorMode={colorMode} />
      </div>
      <div className={``}>
        <Hero colorMode={colorMode}/>
        {/* <Skills2 /> */}
        <Skills />
        <Projects colorMode={colorMode}/>
        <Articles />
        <Footer colorMode={colorMode} />
      </div>
      <div className="bottom-5 left-5 sticky w-fit cursor-pointer">
        <div className="border-2 rounded-full bg-white shadow-md p-3" onClick={toggleColor}>
          <Moon size={20} color="black" />
        </div>
      </div>
    </div>
  );
}

export default App;
