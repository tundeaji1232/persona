import React, { Component } from "react";
// import  LandingPage from "./LandingPage";
// import { Link,Redirect } from "react-router-dom";
import { FacebookShareButton } from 'react-share';
// import Namer from "./Namer";



export default class Result extends Component {

  nameDescribe(tag){
    switch (tag) {
      case "INTJ": {
        return (
            <div className="message">
         <p>THE INTELLECTUAL :IMAGINATIVE STRATEGIC PLANNER </p>
         </div>
        );
      }
      case "ESTP": {
        return (
            <div className="message">
          <p>THE SHOWMAN : SMART , ENERGETIC WITH PERSPECTIVE </p>
          </div>
        );
      }
      case "ESFP": {
        return (
            <div className="message">
         <p>THE ENTERTAINER:SPONTANEOUS AND ENTHUSIASTIC </p>
         </div>
        );
      }
      case "ISFP": {
        return (
            <div className="message">
         <p>THE CHAMELON:FLEXIBLE,CHARMING READY EXPLORER </p>
         </div>
        );
      }
      case "ISTP": {
        return (
            <div className="message">
         <p>THE INNOVATOR:BOLD,PRACTICAL,HANDY </p>
         </div>
        );
      }
      case "ESFJ": {
        return (
            <div className="message">
         <p>THE CONTRIBUTOR: CARING,HELPFUL,SOCIABLE,POPULAR </p>
         </div>
        );
      }
      case "ENTJ": {
        return (
            <div className="message">
         <p>THE DIRECTOR: BOLD,IMAGINATIVE,LEADER </p>
         </div>
        );
      }
      case "INTP": {
        return (
            <div className="message">
         <p> THE DEVISER: INNOVATIVE,CURIOUS</p>
         </div>
        );
      }
      case "ESTJ": {
        return (
            <div className="message">
         <p>THE MANAGER: MANAGERS, ORGANIZED,PARTTICULAR </p>
         </div>
        );
      }
      case "ISFJ": {
        return (
            <div className="message">
         <p>THE DEFENDER:DEDICATED, WARM </p>
         </div>
        );
      }
      case "ENTP": {
        return (
            <div className="message">
         <p>THE DESIGNER:SMART,CURIOUS,INTELLECTUAL </p>
         </div>
        );
      }
      case "INFJ": {
        return (
            <div className="message">
         <p>THE CONFIDANT: QUIET, MYSTICAL,INSPIRING </p>
         </div>
        );
      }
      case "INFP": {
        return (
            <div className="message">
         <p> THE HELPER: POETIC,KIND,ALTRUSTIC </p>
         </div>
        );
      }
      case "ENFJ": {
        return (
            <div className="message">
         <p>THE EDUCATOR: CHARISMATIC, INSPIRING </p>
         </div>
        );
      }
      case "ENFP": {
        return (
            <div className="message">
         <p>THE ADVOCATE :CREATIVE AND ENTHUSIASTIC </p>
         </div>
        );
      }
      case "ISTJ": {
        return (
            <div className="message">
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
      
      <div > {this.nameDescribe(Tagged)} </div>
    
    
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
