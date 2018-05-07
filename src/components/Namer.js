import React from "react";

function nameDescribe(tag){
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