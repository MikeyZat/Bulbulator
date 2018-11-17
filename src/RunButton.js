import React, { Component } from 'react';
import './RunButton.css';
export default class RunButton extends Component{




    render(){
        let style;
        let message;
        if(this.props.isRunning&&this.props.numOfClicks<5){
            message="click to stop";
            style= {
                background: "#e0e0eb",
                color: "#282c34"
            };
        }else if(this.props.isRunning&&this.props.numOfClicks<10){
            message="try harder";
            style= {
                background: "#e6e600",
                color: "#b30000"
            };
        }else if(this.props.isRunning&&this.props.numOfClicks>=10) {
            message = "you cant stop me hahaha";
            style= {
                background: "#282c34",
                color: "#e0e0eb",
                cursor:"auto",
                padding:"25px"
            };
        }else{
            message = "run bulbulator";
            style= {
                background: "#282c34",
                color: "#e0e0eb"
            };
        }
        return(
            <button style={style} onClick={this.props.onClick}>{message}</button>
        );
    }
}