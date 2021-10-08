import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home'
import Navbar from './components/navbar/navbar'
import Signup from './pages/signup';
import Login from './pages/Login'

function App() {
  return (
     <Router>
       <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup} exact/>
          </Switch>   
     </Router>
  );
}

export default App;
