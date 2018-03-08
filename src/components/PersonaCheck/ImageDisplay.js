 import React, { Component } from "react";
 import EachCard from "./EachCard";
 import Result from "../Result";

 export default class ImageDisplay extends Component {
constructor (props) {
  super(props);
  this.state = {
    id1: 0,
    id2: 1,
    tag:''
  }
}
onChange = (uniqueN) => {
  this.setState({
    id1: this.state.id1 + 2,
    id2: this.state.id2 + 2,
  })

  this.state.tag += uniqueN
console.log(this.state);

};


render() {
  return (
    <div className="eachCard">
      <EachCard  id={this.state.id1} increment={this.onChange} tag={this.state.tag}/>
      <EachCard  id={this.state.id2} increment={this.onChange} tag={this.state.tag}/>
      {/* <Result tag={this.state.tag} /> */}
    </div>
  )
}

}
