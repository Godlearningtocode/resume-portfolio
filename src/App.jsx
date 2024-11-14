import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
