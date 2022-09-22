import React, { useState } from 'react';
import './App.css';
import 'bootstrap';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [currentCategory, setCurrentCategory] =useState('About')
  return (
    <body>
      <div className="content">
        <Nav 
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}/>
        <main className="container">
          {currentCategory === 'About' && <About />}
          {currentCategory === 'Portfolio' && <Portfolio />}
          {currentCategory === 'Contact' && <ContactForm />}
          {currentCategory === 'Resume' && <Resume />}
        </main>
      </div>
      <Footer />
    </body>
  );
}

export default App;
