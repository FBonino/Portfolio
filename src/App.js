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

const style = {
  light: {
    backgroundColor: "#E4E4E1",
    backgroundImage: "radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)",
    backgroundBlendMode: "normal, multiply"
  },
  dark: {
    backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
  }
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");
  const timeline = gsap.timeline();
  const logoRef = useRef();
  const subLogo = gsap.utils.selector(logoRef);

  useEffect(() => {
    timeline.to(logoRef.current, { x: "100vw" })
      .to(subLogo("#hexagon"), { duration: 0.5, rotateY: 360 })
      .to(subLogo("#hexagon"), { duration: 0.25, scale: 12 })
      .to(logoRef.current, { duration: 1, opacity: 0 })
      .to(logoRef.current, { display: "none" });
  })

  return (
    <div>
      <div id="logoDiv" style={style[theme]} ref={logoRef}>
        <div id="hexagon">
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
