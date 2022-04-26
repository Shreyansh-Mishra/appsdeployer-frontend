import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("Authorization")!==null){
      setIsLoggedIn(true);
    }
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        {/* <Route path="/" exact>  
          <Question />
        </Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;