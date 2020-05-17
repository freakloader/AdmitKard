import React from 'react';
// import Hello from './Hello';
import Popup from './Popup.js';
export default class Main extends React.Component {
    handleClick(e)
    {
        var  number= document.getElementById("number").value;
        alert(number)

        // return <Popup />
        // return 
    }
    render() {
        return (
            <div className="main">
                <div className="compimg">
                    <img src={"https://s3-ap-southeast-1.amazonaws.com/letsintern.com/images-employer/804873885.png"}></img>
                </div>
                <p>Welcome Back</p>
                <p>Please enter your mobile number to signup</p>

                <input type="text" id="number"></input>
                <br/>
                <button onClick={this.handleClick}>Sign me</button>
            </div>
        )
    }
}

