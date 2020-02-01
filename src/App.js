import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import My404Component from './components/My404Component';



function App(){
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Search}></Route>
          <Route exact={true} path='*' component={My404Component} />
        </Switch>
      </Router>
    </div>
  )
}

 


export default App;
