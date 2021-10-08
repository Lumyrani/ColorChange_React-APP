import React, { Component } from "react";
import "./Colorchange.css";

export default class Colorchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customColors: ["red", " ","green", " ","yellow", " ","orange"," ", "black"],
    };
  }

  changeColor = () => {
    this.setState({ customColors: [...this.state.customColors , "white"] });
  };

  render() {
    return (
      <div>
        <p className="change">
          while clicking button adding only one Color white repeatedly :<br/>
          {this.state.customColors}
        </p>
        <input type="color" id="bgcolor" value="#ffffff" />
        <button onClick={this.changeColor}>Button</button>
      </div>
    );
  }
}
