import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const lightTheme = {
  background: "#E1E5EA",
  color: "#222831",
  primary: "#A7BBC7",
  secondary: "#DA7F8F"
}

const darkTheme = {
  background: "#222831",
  color: "#DDDDDD",
  primary: "#30475E",
  secondary: "#F05454"
}

const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Home theme={themes[theme]} />
      <Nav theme={theme} setTheme={setTheme} themes={themes[theme]} />
      <About theme={themes[theme]} />
      <Projects theme={themes[theme]} />
      <Contact theme={themes[theme]} />
    </ThemeProvider>
  );
}

export default App;
