import React, { Component } from "react";
import array from "./PersonaDetails";
import ImageRender from "../ImageRender"
import { Link, Redirect } from "react-router-dom";
import Result from "../Result";

export default class EachCard extends Component {
  render() {
    const{ id }= this.props;
    console.log("props id",id);

    const { Id,image,description,uniqueChar } = id>7 ?{ Id,uniqueChar }:array[id];

  console.log(this.props.tag);

  if(id===8) return <Redirect to={`/Result/${this.props.tag}`} />


    return (
    <div className="waymaker" onClick= { () =>
         {this.props.increment(uniqueChar)}
       }>
       <div>
        {ImageRender({ Id })}
       </div>
      <p>{description} </p>
    </div>
    );
  }

}
