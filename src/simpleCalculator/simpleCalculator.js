import React from "react";
import styles from "./style";
class SimpleCalculator extends React.Component{
    constructor(){
        super();
        this.state={
            val:0
        }
    }

    add=()=>{
      this.setState({
        val:this.state.val+2,
      })
    }

    square = ()=>{
      this.setState({
        val:this.state.val*this.state.val,
      })
    }

    double = ()=>{
      this.setState({
        val:this.state.val*2,
      })
    }

    divide = ()=>{
      this.setState({
        val:this.state.val/2,
      })
    }

    subtract = ()=>{
      this.setState({
        val:this.state.val-2,
      })
    }

    render(){

        return(
          <div className="App" style={styles.container}>
        <div>
          <text>{this.state.val}</text>
        </div>
        <div>
          <button onClick={this.add}>Add2!</button>
          <button onClick={this.square}>Square!</button>
          <button onClick={this.double}>Double!</button>
          <button onClick={this.divide}>Divideby2!</button>
          <button onClick={this.subtract}>Subtract2!</button>
        </div>
      </div>
        )
    }
}

export default SimpleCalculator;