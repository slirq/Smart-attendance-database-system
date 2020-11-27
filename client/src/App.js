import './App.css';
import React from 'react'
import SignIn from './components/signIn'
import {UserContext} from './context/context'
import SignUp from './components/signUp'
import stuDashBoard from './components/stuDashBoard'
import ProtectedRoute from './ProtectedRoute'
import {Route,BrowserRouter as Router, Redirect ,Switch  } from "react-router-dom";
import { } from '@rebass/forms';
function App() {
  

  return (
    <Router>
      <UserContext>
        <Switch>
          <Route exact path='/' Redirect='/signIn'>
            <Redirect to='signIn'/>
          </Route>
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/signUp' component={SignUp} />
          <ProtectedRoute exact path='/stuDashBoard' component={stuDashBoard} />
        </Switch>
      </UserContext>
    </Router>
  );
}

export default App;
