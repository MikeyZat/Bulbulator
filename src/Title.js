import React, { Component } from 'react';
import {random} from "./helpers";
export default class Title extends Component{

    render(){
        let colors=["#ccff33","#008000","#ff6666","#8080ff","#ffaa00"," #ffcc00","#ffb3e6","#80ffff","white"];
        if(this.props.isRunning){
            let newMessage=[];
            let message=this.props.message;
            for(let i=0;i<message.length;i++){
                newMessage.push(
                    <span style={{color:colors[random(0,colors.length)]}}>{message[i]}</span>
                );
            }
            return(
                <span>{newMessage}</span>
            );
       }else{
           return(
           <span>{this.props.message}</span>
       );
       }
    }
}