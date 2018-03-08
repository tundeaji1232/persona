import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
// import './App.css';
import Header from "./Header";
import LandingPage from "./LandingPage";
import Result from "./Result";
import PersonaBoard from "./PersonaCheck/PersonaBoard";

export default  class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/"  component={LandingPage} />
        <Route exact path="/LandingPage"  component={LandingPage} />
      <Route exact path="/PersonaBoard"  component={PersonaBoard} />
      <Route exact path="/Result/:tag" component={Result} />
      </div>
    </BrowserRouter>
    );
  }
}
