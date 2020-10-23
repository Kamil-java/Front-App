import React from 'react';
import User from './components/User';
import Diets from './components/Diets';
import Workout from './components/Workout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginUser from './components/LoginComponents/LoginUser';
import NewLoginUser from './components/LoginComponents/NewLoginUser';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './style/appStyle.css';


class App extends React.Component {

  render(){
  return (
    <Router>
    <React.Fragment>
      <Header/>
      <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/diets" component={Diets}/>
            <Route path="/workout" component={Workout}/>
            <Route path="/login" component={LoginUser}/>
            <Route path="/signIn" component={NewLoginUser}/>
          </Switch>
      </div>
      <Footer/>
    </React.Fragment>
    </Router>
    

  );
  }
}

export default App;
