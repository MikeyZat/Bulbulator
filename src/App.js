import React, { Component } from 'react';
import './App.css';
import RunButton from './RunButton'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isRunning:false,
      numOfClicks:0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let isRunning = true;
    let newNumOfClicks = this.state.numOfClicks+1;
    this.setState({
        isRunning: isRunning,
        numOfClicks: newNumOfClicks
    });
  }



  render() {
    let style={
          color: this.state.isRunning ? "#e0e0eb":"#282c34",
          background: this.state.isRunning ?"#282c34":"#e0e0eb"
      };
    let message = this.state.isRunning? "Bulbulator is running":"New and amazing bulbulator";
    return (
      <div className="App" style={style}>
        <header className="App-header">
            {message}
        </header>
          <RunButton onClick={this.handleClick} isRunning={this.state.isRunning} numOfClicks={this.state.numOfClicks}/>
      </div>
    );
  }
}

export default App;
