import './App.css';
import SignIn from './components/signIn'
import {UserContext} from './context/context'
import SignUp from './components/signUp'
import {Route,BrowserRouter as Router, Redirect  } from "react-router-dom";
function App() {
  return (
    <Router>
      <UserContext>
        <Route exact path='/' Redirect='/signIn'>
          <Redirect to='signIn'/>
        </Route>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/signIn'component={SignIn}/>
      </UserContext>
    </Router>
  );
}

export default App;
