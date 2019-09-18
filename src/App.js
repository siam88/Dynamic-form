import React, { Component } from 'react';


import Dashboard from './view/dashboard/dashboard'
import Auth from "./view/auth/auth";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router"

class App extends Component {
  state = {
    auth: false,
    Allproducts: []
  }

  onAuthentication = auth => {
    this.setState({ auth });
    localStorage.setItem("auth", auth);
  }

  onLogout = () => {
    this.setState({ auth: false });
    console.log("logout");
    localStorage.setItem("auth", "")
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path="/dashboard"
              component={() => (<Dashboard onLogout={this.onLogout} />)}
            />

            <Route path="/auth"
              component={() => (<Auth onAuthentication={this.onAuthentication} />)} />
          </Switch>
          {
            this.state.auth ? (<Redirect to="/dashboard" />) : (<Redirect to="/auth" />)
          }
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
