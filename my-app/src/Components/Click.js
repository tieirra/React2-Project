import React , { Component } from 'react';


 export class Click extends Component {

    constructor(props) {
        super(props);
          this.state = {
         count: 0
        };
    }
    UpdateClick=()=> {
        this.setState({ count: this.state.count + 1 });
    };

    render (){
        const {count} = this.state;
        return (
        <div>
        <p> I am buying myself flowerers this week 🌹 </p>
        <button onClick= {this.UpdateClick}>Click {count}  time </button>
        </div>
       );
    }
}

export default Click;