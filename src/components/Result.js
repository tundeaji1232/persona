import React, { Component } from "react";
import  LandingPage from "./LandingPage";
import { Link,Redirect } from "react-router-dom";



export default class Result extends Component {

render(){
  // const{ tags }= this.props;
  console.log("props tags",this.props.tag);
  return (
    <div className="result">

      <h1>{this.props.match.params.tag}</h1>


<div >
    <Link to ="/LandingPage">

      <button className="button">
        <div className="bottom-button"> Who Else? </div>
      </button>
    </Link>
  </div>
      </div>
  );
}
}
