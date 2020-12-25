import React from "react";

export default class clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
    setInterval(()=>this.tick(),1000);
  }

  tick(){
    this.setState({date: new Date()});
  }
  
  render(){
    return(
      <div>
        <h1>Hello, World!</h1>
        <h2>IT is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
