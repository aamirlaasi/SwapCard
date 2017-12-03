import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./pages/Cards";
import UserProfile from "./components/UserProfile";
import Auth from './Auth/Auth';
import Callback from './Callback/Callback';


// const App = () =>
//   <div className="container-fluid">
//     <Cards />
//   </div>;
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
    console.log(localStorage.getItem('profile'));
  }
}

const App = () =>
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Cards} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        console.log(props);
        return <UserProfile {...props} />
      }}/>
      {/* <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        console.log(props);
        return <Callback {...props} />
      }}/> */}
    </Switch>
  </div>
</Router>;

export default App;
