import { useState, lazy, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { gsap } from "gsap";
import "./App.css";
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
const CV = lazy(() => import('./Components/CV/CV'));

const lightTheme = {
  background: "#DDDDDD",
  color: "#222831",
  primary: "#393E46",
  secondary: "#FD7014"
}

const darkTheme = {
  background: "#222831",
  color: "#DDDDDD",
  primary: "#393E46",
  secondary: "#FD7014"
}

const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");
  const logoRef = useRef();
  const subLogo = gsap.utils.selector(logoRef);

  useEffect(async () => {
    await gsap.to(logoRef.current, { x: "100vh" });
    await gsap.to(subLogo(".logo"), { rotate: 360 });
    await gsap.to(logoRef.current, { x: "300vh" });
    await gsap.to(logoRef.current, { display: "none" });
  })

  return (
    <div>
      <div className="logoDiv" ref={logoRef}>
        <div className="logo">
          FBF
        </div>
      </div>
      <ThemeProvider theme={themes[theme]}>
        <Switch>
          <Route exact path="/">
            <Home theme={themes[theme]} />
            <Nav theme={theme} setTheme={setTheme} themes={themes[theme]} />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route exact path="/cv" component={CV} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
