import React, { Component } from "react";
import  LandingPage from "./LandingPage";
import { Link,Redirect } from "react-router-dom";
import { FacebookShareButton } from 'react-share';
// import Namer from "./Namer";



export default class Result extends Component {

  nameDescribe(tag){
    switch (tag) {
      case "INTJ": {
        return (
            <div>
         <p>THE INTELLECTUAL :IMAGINATIVE STRATEGIC PLANNER </p>
         </div>
        );
      }
      case "ESTP": {
        return (
            <div>
          <p>THE SHOWMAN : SMART , ENERGETIC WITH PERSPECTIVE </p>
          </div>
        );
      }
      case "ESFP": {
        return (
            <div>
         <p>THE ENTERTAINER:SPONTANEOUS AND ENTHUSIASTIC </p>
         </div>
        );
      }
      case "ISFP": {
        return (
            <div>
         <p>THE CHAMELON:FLEXIBLE,CHARMING READY EXPLORER </p>
         </div>
        );
      }
      case "ISTP": {
        return (
            <div>
         <p>THE INNOVATOR:BOLD,PRACTICAL,HANDY </p>
         </div>
        );
      }
      case "ESFJ": {
        return (
            <div>
         <p>THE CONTRIBUTOR: CARING,HELPFUL,SOCIABLE,POPULAR </p>
         </div>
        );
      }
      case "ENTJ": {
        return (
            <div>
         <p>THE DIRECTOR: BOLD,IMAGINATIVE,LEADER </p>
         </div>
        );
      }
      case "INTP": {
        return (
            <div>
         <p> THE DEVISER: INNOVATIVE,CURIOUS</p>
         </div>
        );
      }
      case "ESTJ": {
        return (
            <div>
         <p>THE MANAGER: MANAGERS, ORGANIZED,PARTTICULAR </p>
         </div>
        );
      }
      case "ISFJ": {
        return (
            <div>
         <p>THE DEFENDER:DEDICATED, WARM </p>
         </div>
        );
      }
      case "ENTP": {
        return (
            <div>
         <p>THE DESIGNER:SMART,CURIOUS,INTELLECTUAL </p>
         </div>
        );
      }
      case "INFJ": {
        return (
            <div>
         <p>THE CONFIDANT: QUIET, MYSTICAL,INSPIRING </p>
         </div>
        );
      }
      case "INFP": {
        return (
            <div>
         <p> THE HELPER: POETIC,KIND,ALTRUSTIC </p>
         </div>
        );
      }
      case "ENFJ": {
        return (
            <div>
         <p>THE EDUCATOR: CHARISMATIC, INSPIRING </p>
         </div>
        );
      }
      case "ENFP": {
        return (
            <div>
         <p>THE ADVOCATE :CREATIVE AND ENTHUSIASTIC </p>
         </div>
        );
      }
      case "ISTJ": {
        return (
            <div>
         <p>THE AUDITOR : PRACTICAL,FACT-MINDED AND RELIABLE </p>
         </div>
        );
      }
    
      default: {
        return (
          <p>  </p>
        );
      }
    }
  }

render(){
  // const{ tags }= this.props;
  console.log("props tags",this.props.tag);
  const Tagged=String(this.props.match.params.tag);
  console.log("Tagged:", Tagged);
  

  return (
    <div className="result">

      <h1>{this.props.match.params.tag}</h1>
      
      {this.nameDescribe(Tagged)}
    
    
      {/* <div>{Namer(Tagged)}</div> */}

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
