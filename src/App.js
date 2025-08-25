import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <div className="bg-green-500 text-white p-6 rounded-lg text-center">
      Tailwind is working! 🎉
    </div>s
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;