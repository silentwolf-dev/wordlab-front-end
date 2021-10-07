import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home'
import Navbar from './components/navbar/navbar'
import Signup from './pages/signup';

function App() {
  return (
     <Router>
       <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signup" component={Signup} exact/>
          </Switch>   
     </Router>
  );
}

export default App;
