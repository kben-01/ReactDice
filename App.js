import React from 'react';
import './App.css';
import Die from './die'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      dice: [<Die></Die>]
    }
  }

  render() {
    return (
      <div className="App">
        <div className= "App-Header">
          <button onClick = {this.addDie}>+</button>
          {
          this.state.dice.map((index) => {
            return <Die key={index}></Die>
          })
          }
        </div>
      </div>
    )
  }

  addDie = () => {
    const newDiceArray = this.state.dice
    newDiceArray.push(newDiceArray.length)
    this.setState({
      dice: newDiceArray
    })
  }
}

export default App;
