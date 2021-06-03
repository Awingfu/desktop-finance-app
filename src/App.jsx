import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About, Home, Payroll } from './pages';
import { NavigationBar } from './components';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/payroll" component={Payroll}/>
              <Route component={Home} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
