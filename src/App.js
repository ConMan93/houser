import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Components
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
// import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

       <Switch>
         <Route exact path='/' component={ Dashboard } />
         <Route path='/wizard' component={ Wizard } />
       </Switch>
        
      </div>
    );
  }
}

export default App;
