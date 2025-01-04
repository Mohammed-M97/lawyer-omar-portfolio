import './App.css';
import NavigationBar from './components/NavigationsBar';
import Header from './components/Header.jsx'
import AboutSection from './components/AboutSection.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import ContactSection from './components/ContentSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
