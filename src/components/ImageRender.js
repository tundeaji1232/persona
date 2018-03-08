import React from "react";
import intro from "./PersonaCheck/personality/mind/introverted.png";
import extro from "./PersonaCheck/personality/mind/extroverted.png";
import  observe from "./PersonaCheck/personality/energy/observant.png";
import  intuit from "./PersonaCheck/personality/energy/intuitive.png";
import thinking from "./PersonaCheck/personality/nature/thinking.png";
import feeling from  "./PersonaCheck/personality/nature/feeling.png";
import judging from "./PersonaCheck/personality/tactics/judging.png";
import prospecting from "./PersonaCheck/personality/tactics/prospecting.png";
import { Link, Redirect } from "react-router-dom";
import Result from "./Result";



export default identity => {
  console.log(identity);
  switch (identity.Id) {
    case 0 : {
      return (
        <img className="" src={intro} alt="introverted" />
      );
      break ;
    }
    case 1: {
      return (
        <img className="" src={extro} alt="extroverted" />
      );
        break ;
    }
    case 2: {
      return (
        <img className="" src={observe} alt="extroverted" />
      );
        break ;
    }
    case 3: {
      return (
        <img className="" src={intuit} alt="extroverted" />
      );
        break ;
    }
    case 4: {
      return (
        <img className="" src={thinking} alt="extroverted" />
      );
        break ;
    }
    case 5: {
      return (
        <img className="" src={feeling} alt="extroverted" />
      );
        break ;
    }
    case 6: {
      return (
        <img className="" src={judging} alt="extroverted" />
      );
        break ;
    }
    case 7: {
      return (
        <img className="" src={prospecting} alt="extroverted" />
      );
        break ;
    }
    


    default: {
      return (
        <div>No result </div>
      );
    }
  }
}
