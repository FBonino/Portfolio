import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CV from './Components/CV/CV';

const lightTheme = {
  background: "#E1E5EA",
  color: "#222831",
  primary: "#A7BBC7",
  secondary: "#DA7F8F"
}

const darkTheme = {
  background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
  backgroundBlend: "multiply",
  backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
  backgroundColor: "#222831",
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
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Switch>
          <Route exact path="/">
            <Home theme={themes[theme]} />
            <Nav theme={theme} setTheme={setTheme} themes={themes[theme]} />
            <About theme={themes[theme]} />
            <Projects theme={themes[theme]} />
            <Contact theme={themes[theme]} />
          </Route>
          <Route exact path="/cv" component={CV} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
