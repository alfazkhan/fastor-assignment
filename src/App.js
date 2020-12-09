import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Container/Login';
import Register from './Container/Register';
import MainPage from './Container/MainPage';
import RestaurantPage from './Container/RestaurantPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
          <Route path="/user/login" exact>
            <Login />
          </Route>
          <Route path="/user/register" exact>
            <Register />
          </Route>
          <Route path="/Restaurant/:name" exact>
            <RestaurantPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
