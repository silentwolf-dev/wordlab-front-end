import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home'
import Navbar from './components/navbar/navbar'


function App() {
  return (
     <Router>
       <Navbar/>
        <Switch>
          <Route path="/" component={Home}/>
          </Switch>   
     </Router>
  );
}

export default App;
