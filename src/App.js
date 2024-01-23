import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Message from "./Components/Message";
import { useState } from "react";

function App() {
  const [messageBox, setMessageBox] = useState(false);

  const toggleMessageBox = () => {
    setMessageBox(!messageBox);
  };
  return (
    <BrowserRouter>
      <div className="sticky">
        <Navbar openMessageBox={toggleMessageBox} />
      </div>
      {messageBox && (
        <div className="flex justify-center items-center h-full w-screen z-50 fixed">
          <Message
            messageBox={messageBox}
            toggleMessageBox={toggleMessageBox}
          />
        </div>
      )}
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
