import React, {Component} from 'react';
import './App.css';
import RunButton from './RunButton';
import Bul from './Bul';
import {random} from './helpers';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            numOfClicks: 0,
            buls: []
        };

        this.colors=["#ccff33","#008000","#ff6666","#8080ff","#3d3d5c","#ffaa00"," #ffcc00","#ffb3e6","#80ffff","white","black"];

        this.handleClick = this.handleClick.bind(this);
        this.createBul = this.createBul.bind(this);
    }

    handleClick() {
        let isRunning = true;
        let newNumOfClicks = this.state.numOfClicks + 1;
        setInterval(this.createBul,2000/newNumOfClicks);
        this.setState({
            isRunning: isRunning,
            numOfClicks: newNumOfClicks
        });
    }

    createBul(){
        let newBuls = this.state.buls.slice(0);
        let positionTop = random(0,100)+"%";
        let positionLeft = random(0,100)+"%";
        let color = this.colors[random(0,this.colors.length)];
        let numOfBuls = random(1,10);
        let size = random(5,30);
        newBuls.push(
            <Bul
                size={size}
                positionTop={positionTop}
                positionLeft={positionLeft}
                color={color}
                numOfBuls={numOfBuls}
            />
        );
        this.setState({
            buls:newBuls.slice(0)
        })
    }


    render() {
        let style = {
            color: this.state.isRunning ? "#e0e0eb" : "#282c34",
            background: this.state.isRunning ? "#282c34" : "#e0e0eb"
        };
        let message = this.state.isRunning ? "Bulbulator is running" : "New and amazing bulbulator";
        return (
            <div className="App" style={style}>
                {this.state.buls}
                <header className="App-header">
                    {message}
                </header>
                <RunButton onClick={this.handleClick} isRunning={this.state.isRunning}
                           numOfClicks={this.state.numOfClicks}/>
            </div>
        );
    }
}

export default App;
