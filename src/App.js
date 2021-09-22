

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import { Zakladka } from './zakladka';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/zakladka'>
            <Zakladka/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
