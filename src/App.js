import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      	<Route path='/Nelson' exact component = {Home}/>
        <Route path ='/Projects' component={Projects}/>
        <Route path ='/Resume' component = {Resume}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
