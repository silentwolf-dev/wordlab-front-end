import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NAVBAR from './components/navbar/navbar'
import Home from './pages/home'

function App() {
  return (
     <Router>
       <NAVBAR/>
        <Switch>
          <Route path="/" component={Home}/>
          </Switch>   
     </Router>
  );
}

export default App;
