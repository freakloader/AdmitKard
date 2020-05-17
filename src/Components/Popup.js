import React from 'react';
import otp from '../otp.png'

export default class Popup extends React.Component {
    // handleClick(e)
    // {
    //     var  number= document.getElementById("number").value;
    //     // alert(number)
    //     return; 
    // }
    render() {
        return (
            <div className="main">
                <div className="compimg">
                    <img src={otp}></img>
                </div>
                <p>Please enter the received OTP</p>
                {/* <p>Please enter your mobile number to signup</p> */}

                <div className="otpparent">
                    <input type="text" className="otp"></input>
                    <input type="text" className="otp"></input>
                    <input type="text" className="otp"></input>
                    <input type="text" className="otp"></input>
                </div>
                <br/>
                <button onClick={this.handleClick}>Sign me</button>
            </div>
        )
    }
}

