import { useState, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
const Contact = lazy(() => import('./Components/Contact/Contact'));
const About = lazy(() => import('./Components/About/About'));
const Home = lazy(() => import('./Components/Home/Home'));
const Nav = lazy(() => import('./Components/Nav/Nav'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const CV = lazy(() => import('./Components/CV/CV'));

// const lightTheme = {
//   background: "#DCD9D4",
//   backgroundBlend: "soft-light,screen",
//   color: "#222831",
//   primary: "#A7BBC7",
//   secondary: "#DA7F8F"
// }

const lightTheme = {
  background: "#DDDDDD",
  color: "#222831",
  primary: "#393E46",
  secondary: "#FD7014"
}

// const darkTheme = {
//   background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
//   backgroundBlend: "multiply",
//   background: "#222831",
//   color: "#DDDDDD",
//   primary: "#30475E",
//   secondary: "#F05454"
// }

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
