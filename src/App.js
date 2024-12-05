import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

// THIS SECTION TAKES CARE OF RENDERING COMPONENTS BASED ON THE URL.(by BrowserRouter,Router,Route)
const App = () => {
  return (  
    <Router> {/* NOTE: must surround all the pages we wish to display components based on url routes with Router component (which is BrowserRouter) */}
      <Switch> {/* NOTE: insures that in case of multiple routs match it will render only the first matching route. */}
        <Route path="/" exact>
          <Users /> {/* NOTE: renders the Users component when the web URL is: "http://localhost:3000/" */}
        </Route>
        <Route path="/places/new" exact> {/* NOTE: renders the NewPlace component when web URL is: "http://localhost:3000/places/new" */}
          <NewPlace />
        </Route>
        <Redirect to="/" />  {/* NOTE: handles fallback gracefully and Redirects any unmatched routes to "http://localhost:3000/" - aka the homepage */}
      </Switch> {/* prevents its default behavior which is to continue rendering all the other routes which are below the matched root. */}
    </Router>
  );
};

export default App;
