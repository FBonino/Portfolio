import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';

function App() {
  const darkMode = localStorage.getItem("DarkMode");
  const language = localStorage.getItem("Language");
  if (darkMode === undefined) localStorage.setItem("DarkMode", false);
  if (!language) localStorage.setItem("Language", "english");

  return (
    <>
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
