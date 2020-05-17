import React from 'react';
// import otp from '../otp.png';
import {TextField,Button,OutlinedInput} from '@material-ui/core';

export default class Popup extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e)
    {
        var inputs= document.getElementsByName("otpbox");
        console.log(inputs)
        var userOTP;
        if(inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value)
        {
            userOTP = inputs[0].value+inputs[1].value+inputs[2].value+inputs[3].value;
            // console.log(`useropt:${userOTP}`)
        }
        else
        {
            alert("Please fill all the boxes!!");
            return;
        }

        if(userOTP)
        {
            if(this.props.state.OTP === userOTP)
                alert("Success!! User OTP matches system-generated OTP");
            else
                alert("Error!! User OTP doesn't match system-generated OTP")

            this.props.stateChange({verified:true})
        }


        document.querySelector(".bg-modal").style.display = "none";
    }

    render() {
        return (
            <div className="bg-modal">
                <div className="content-modal">
                        <div id="content-modal-body">
                            <div className="compimg">
                                <img src={"https://as1.ftcdn.net/jpg/01/93/09/00/500_F_193090061_WIT4cQ4IsOVTWoANYH4kbUa6LbmZm5e9.jpg"}></img>
                            </div>
                            <p>Please enter the received OTP</p>            
                            <div className="otpparent">
                                <OutlinedInput id="outlined-basic" name="otpbox" className="otp" inputProps={{maxLength:1,style: {textAlign: 'center',fontSize:'20px'}}} variant="outlined" />
                                <OutlinedInput id="outlined-basic" name="otpbox" className="otp" inputProps={{maxLength:1,style: {textAlign: 'center',fontSize:'20px'}}} variant="outlined" />
                                <OutlinedInput id="outlined-basic" name="otpbox" className="otp" inputProps={{maxLength:1,style: {textAlign: 'center',fontSize:'20px'}}} variant="outlined" />
                                <OutlinedInput id="outlined-basic" name="otpbox" className="otp" inputProps={{maxLength:1,style: {textAlign: 'center',fontSize:'20px'}}} variant="outlined" />
                            </div>
                            <br />
                            <Button variant="contained" color="primary" style= {{width:'20%'}} onClick={this.handleClick}>
                                Verify OTP
                            </Button> 
                        </div>
                </div> 
            </div>
        )
    }
}

