import React, { Component } from 'react';
import './Bul.css';
export default class Bul extends Component{

    render(){
        let style={
            position:"absolute",
            left: this.props.positionLeft,
            top: this.props.positionTop,
            color: this.props.color,
            fontSize:"calc("+this.props.size+"px + 2vmin",
            zIndex:"2"
        };
        let bul = "";
        for(let i=0;i<this.props.numOfBuls;i++){
            bul+="Bul";
        }

        return(
            <span style={style} className="Bul">{bul}</span>
        );
    }
}