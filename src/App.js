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
      {shape: "https://img.icons8.com/doodle/48/000000/turkeycock.png"},
      {shape: "https://img.icons8.com/doodle/96/000000/hatching-chicken.png"},
      {shape: "https://img.icons8.com/doodle/96/000000/hornet-hive.png"},
      {shape: "https://img.icons8.com/doodle/48/000000/sea-shell.png"},
      {shape: "https://img.icons8.com/nolan/96/000000/unicorn.png"},
      {shape: "https://img.icons8.com/nolan/64/000000/orca.png"},
      {shape: "https://img.icons8.com/plasticine/100/000000/bird.png"},
      {shape: "https://img.icons8.com/plasticine/100/000000/pig.png"},
    ]
  }

  randomizer = () => {
    Math.floor((Math.random() * 7) + 1)
    // var icon = this.state.icons[Math.floor((Math.random() * 7) + 1)].shape;
    // console.log (typeof icon);
    // return icon;
    // // let num = this.state.icons.length;
    // var num = Math.floor((Math.random() * 7) + 1);
    // console.log (num);
    // console.log ('2nd log: ', this.state.icons[num].shape);
    // // return num;
  }

  updateGrid = () => {
    const newIcons = [...this.state.icons];
    var i=0, j=0, temp = null

    for (i=0; i<newIcons.length; i++) {
      j=Math.floor(Math.random() * newIcons.length)
      temp = newIcons[i]
      newIcons[i] = newIcons[j]
      newIcons[j] = temp
    }
    this.setState({icons: newIcons});
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Bejeweled</h1>
        <h3>Challenge yorself !</h3>
        <hr />
        <button onClick={this.updateGrid}>New Grid</button>

        <div className="Grid-container">
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>

          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
          <div><Cell icon={this.state.icons[Math.floor((Math.random() * 7) + 1)].shape}/></div>
        </div>

      </div>
    );
  }
}

export default App;
