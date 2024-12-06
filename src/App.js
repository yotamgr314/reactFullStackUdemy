import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

// THIS SECTION TAKES CARE OF RENDERING COMPONENTS BASED ON THE URL.(by BrowserRouter,Router,Route)
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        {" "}
        {/* NOTE web page that is above the <switch> and belowit will be displayed regardless if the user has autinticated or not. */}
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

/* 
NOTE: instead of putting all the pages in one pages folder, and all the components in one component folder we will:
01) create a folder for each "feature" in our web, like users, places, etc... 
    01) inside each feature folder we will create:
        01) components folder. NOTE: here will be the components which are not rendered as full screen components, for example a button component will be here.
        02) pages folder. NOTE: here will be the components which are rendered as full screen components aka all of the place related pages. for example a new place component will be here. 

02) in the shared folder there will be only components folder, which contains shared components that needed in multiple pages.
*/
