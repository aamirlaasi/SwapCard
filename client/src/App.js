import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./pages/Cards";
import UserProfile from "./components/UserProfile";

// const App = () => 
//   <div className="container-fluid">
//     <Cards />
//   </div>;

const App = () =>
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Cards} />
      <Route exact path="/UserProfile" component={UserProfile} />
    </Switch>
  </div>
</Router>;

export default App;
