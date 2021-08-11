import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Route>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Route>
    </div>
  );
}

export default App;
