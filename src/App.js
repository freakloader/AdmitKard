import React from 'react';
import './App.css';
import Main from './Components/Main'

export default class App extends React.Component{
  render(){
      return (
        <div className="App">
          <Main onChange={this.togglestate} parentstate={this.state}/>
        </div>
    );

  }

}

