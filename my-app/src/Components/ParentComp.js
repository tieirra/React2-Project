import React, { Component } from "react";
import PureComp from "./PrueComp";
import RegComp from "./RegComp";



class ParentComp extends Component {
    constructor(props) {
        super(props);
          this.state = {
         name: "Simplilearn"
        };
    }

    componentDidMountomponent() {
    this.setState(()=> {

        this.setState({
 name: "Simplilearn"
        });

    } , 3000)

    } 

  render() {
    console.log("Parent Component Render ");
    return (

    <div> 
        
        I'm the Parent Component 
        <RegComp name={this.state.name}/>
        < PureComp name={this.state.name}/>
        
        </div>
    );
  }
}

export default ParentComp;
