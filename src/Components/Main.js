import React from 'react';
import tick from './../tick.jpg'
import Popup from './Popup.js';
import {Button,OutlinedInput} from '@material-ui/core';

export default class Main extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            OTP:null,
            verified:false
        }
        
        this.changeState = this.changeState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

 
    handleClick(e)
    {
        var number = document.getElementById("number").value;
        var numbercheck = number.replace(/[^0-9]/gi,'');
        if( !(numbercheck === number) || number.length <= 9 || !number )
        {
            alert("Please enter a valid number!!")
            return;
        }
        var OTP = "1234";
        alert(`System generated OTP:${OTP}`);
        this.setState({
            OTP
        })
        document.querySelector(".bg-modal").style.display = "flex";
    }

    changeState(change)
    {
        this.setState(change)
    }
    render() {
        return (
            <div className="main">
                    <div className="compimg">
                        <img src={"https://s3-ap-southeast-1.amazonaws.com/letsintern.com/images-employer/804873885.png"}></img>
                    </div>
                    <p className="robotoboldfont">Welcome Back</p>
                    <p className="robotofont">Please enter your mobile number to signup</p>
                    <div>
                        <OutlinedInput id="number" inputProps={{maxLength:11,style: {textAlign: 'center',height:'20px',fontSize:'20px'}}} variant="outlined" />
                    </div>
                    
                    <br/>
                        <Button variant="contained" color="primary" onClick={this.handleClick}>
                            Send OTP
                        </Button>
                <Popup stateChange={this.changeState} state={this.state}/>
            </div>
        )
    }
}

