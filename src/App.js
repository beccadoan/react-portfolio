import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/Contact'

function App() {
  const [currentCategory, setCurrentCategory] =useState('About')
  return (
    <body>
      <div className="content">
        <Nav 
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}/>
        <main>
          {currentCategory === 'About' && <About />}
          {currentCategory === 'Portfolio' && <Portfolio />}
          {currentCategory === 'Contact' && <ContactForm />}
        </main>
      </div>
      <Footer />
    </body>
  );
}

export default App;
