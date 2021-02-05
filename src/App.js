import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
