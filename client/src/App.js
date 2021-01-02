import React from 'react'
import SignIn from './components/signIn'
import {UserContext} from './context/context'
import SignUp from './components/signUp'
import StuDashBoard from './components/StuDashBoard'
import StaffDashBoard from './components/StaffDashBoard'
import ProtectedRoute from './ProtectedRoute'
import {Route,BrowserRouter as Router, Redirect ,Switch  } from "react-router-dom";
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
          <Route exact path='/staffDashBoard' component={StaffDashBoard} />
          <Route exact path='/stuDashBoard' component={StuDashBoard} />
        </Switch>
      </UserContext>
    </Router>
  );
}
export default App;
