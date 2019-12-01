import React , { Component } from "react";

// import React from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";


class App extends Component {
  state ={
    input:"",
    prevousNumber:"",
    currentNumber :"",
    operator:""
  };

  // method that take the value of the button and adding it to the state object
  input = val =>{
    this.setState({input:this.state.input +val});
  }

  // method that clear the input
  clear = ()=>{
    this.setState({input:""});
  }
  // method that add 2 inputs
  add =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="+";
  }
  // method that subtract 2 inputs
  subtract =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="-";
  }
  // method that multiply 2 inputs
  multiply =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="*";
  }
  // method that =divide 2 inputs
  divide =()=> {
    this.state.prevousNumber=this.state.input;
    this.setState({input:""});
    this.state.operator="/";
  }
  // evaluation method
  evaluate =()=> {
    this.state.currentNumber=this.state.input;
    if(this.state.operator=="+"){
      this.setState({
        input: parseInt(this.state.prevousNumber) +
               parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator=="-"){
      this.setState({
        input: parseInt(this.state.prevousNumber) -
               parseInt(this.state.currentNumber)
      
      });
    }
    else if(this.state.operator=="*"){
      this.setState({
        input: parseInt(this.state.prevousNumber) *
               parseInt(this.state.currentNumber)
      
      });
    }else if(this.state.operator=="/"){
      this.setState({
        input: parseInt(this.state.prevousNumber) /
               parseInt(this.state.currentNumber)
      
      });
    }
 }

  render (){
    return (
      <div className ="app">
        <div className ="calculator">

          <Input>{this.state.input}</Input>
          <Button handelClick={this.input}>7</Button>
          <Button handelClick={this.input}>8</Button>
          <Button handelClick={this.input}>9</Button>
          <Button handelClick={this.input}>4</Button>
          <Button handelClick={this.input}>5</Button>
          <Button handelClick={this.input}>6</Button>
          <Button handelClick={this.input}>1</Button>
          <Button handelClick={this.input}>2</Button>
          <Button handelClick={this.input}>3</Button>
          <Button handelClick={this.input}>.</Button>
          <Button handelClick={this.input}>0</Button>
          <Button handelClick={this.add}>+</Button>
          <Button handelClick={this.subtract}>-</Button>
          <Button handelClick={this.multiply}>*</Button>
          <Button handelClick={this.divide}>/</Button>
          <Button handelClick={this.evaluate}>=</Button>
          <Button handelClick={this.clear}>C</Button>
        </div>
      </div>

    );

  }

}

export default App;
