import React, { Component } from "react";
// import  PersonaBoard from "./PersonaCheck/PersonaBoard"
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <h1>Hi, Welcome to Persona</h1>
        <p> Quick Personality Test</p>
        <Link to ="/PersonaBoard">
        <button className="button">
            <div> Get started </div>
    </button>
  </Link>
      </div>
    );
  }
}
