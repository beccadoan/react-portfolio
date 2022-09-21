import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <body>
      <div className="content">
        <Nav/>
        <main>
          <About />
          <Portfolio />
        </main>
      </div>
      <Footer />
    </body>
  );
}

export default App;
