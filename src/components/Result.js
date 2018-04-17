import React, { Component } from "react";
import  LandingPage from "./LandingPage";
import { Link,Redirect } from "react-router-dom";
import { FacebookShareButton } from 'react-share';



export default class Result extends Component {

render(){
  // const{ tags }= this.props;
  console.log("props tags",this.props.tag);
  return (
    <div className="result">

      <h1>{this.props.match.params.tag}</h1>

    <p className="cta">If this result best describes you</p>
        <p className="cta"> Let your friends know more of who you are !  </p>
{/* <div >     
    <Link to ="/LandingPage">
      <button className="button">
        <div className="bottom-button"> Share On Facebook? </div>
      </button>
    </Link>
  </div> */}
  <FacebookShareButton url={"https://personaa.herokuapp.com"}>
  
  <button className="button">
        <div className="bottom-button"> Share On Facebook? </div>
      </button>
  
  </FacebookShareButton>
      </div>
  );
}
}
