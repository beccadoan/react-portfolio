import './App.css';
import Nav from './components/Nav'
import Project from './components/Project'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <body>
      <div className="content">
        <Nav/>
        <main>
          <About />
          <Project />
        </main>
      </div>
      <Footer />
    </body>
  );
}

export default App;
