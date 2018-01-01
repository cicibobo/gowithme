import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Header from './Header';
import FourOhFrour from '../pages/404';

export default class MainComponent extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route  path='/signin/google' component={Signin}/>
            <Route  path='/signin/facebook' component={Signin}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
