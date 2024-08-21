import React, { Component} from "react";

class RegComp extends Component {
  render() {
    console.log("Pure component render ");

    return <div>I'm the Regular Component {this.props.name}</div>;
  }
}

export default RegComp ;