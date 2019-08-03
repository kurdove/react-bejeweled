import React, { Component } from 'react';
import './App.css';
import Cell from './Cell/Cell';

class App extends Component {
  state = {
    icons: [
      {shape: "https://img.icons8.com/dusk/64/000000/car.png"},
      {shape: "https://img.icons8.com/color/96/000000/car.png"},
      {shape: "https://img.icons8.com/color/96/000000/pi.png"},
      {shape: "https://img.icons8.com/cotton/64/000000/owl--v1.png"},
      {shape: "https://img.icons8.com/cotton/64/000000/bulldog--v1.png"},
      {shape: "https://img.icons8.com/cotton/64/000000/crab--v1.png"},
      {shape: "https://img.icons8.com/doodle/48/000000/turkeycock.png"}
    ]
  }

  updateGrid = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Bejeweled</h1>
        <p>Challenge yorself !</p>
        <hr />

        <div className="Grid-container">
          <div><Cell icon={this.state.icons[0].shape}/></div>
          <div><Cell icon={this.state.icons[2].shape}/></div>
          <div><Cell icon={this.state.icons[1].shape}/></div>
          <div><Cell icon={this.state.icons[6].shape}/></div>
          <div><Cell icon={this.state.icons[3].shape}/></div>
          <div><Cell icon={this.state.icons[5].shape}/></div>
          <div><Cell icon={this.state.icons[4].shape}/></div>

          <div><Cell /></div>
          <div><Cell /></div>
          <div><Cell /></div>
          <div><Cell /></div>
          <div><Cell /></div>
          <div><Cell /></div>
          <div><Cell /></div>

        </div>
        <button onClick={this.updateGrid}>Update Grid</button>

      </div>
    );
  }
}

export default App;
