import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const lightTheme = {
  background: "white",
  color: "black"
}

const darkTheme = {
  background: "black",
  color: "white"
}

const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Home theme={theme} />
      <Nav theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </ThemeProvider>
  );
}

export default App;
