import React, {Component} from 'react'
import logo from './logo.svg'
import './styles/site.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'garrafa 0'
    }
  }

  componentDidMount() {
    setInterval(() => this.setState({
      title: 'Garrafa ' + + (new Date()) % 71
    }), 1000)
  }

  render() {
    return (<TicTacToeComponent/>)
  }
}

const player = {
  ONE: 'X',
  TWO: 'O'
}

class TicTacToeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameover: false,
      isPlayerOne: true,
      cells: Array(9).fill(null)
    }
  }

  play(index) {
    if (this.state.gameover) {
      return
    }

    const cells = this
      .state
      .cells
      .slice()

    if (cells[index]) {
      return
    }

    cells[index] = this.state.isPlayerOne
      ? player.ONE
      : player.TWO

    this.setState({cells})

    const hasWinner = checkWinner(cells)
    const gameover = hasWinner || cells.every(cell => cell !== null)
    if (gameover) {
      this.setState({gameover})
      return
    }

    this.setState({
      isPlayerOne: !this.state.isPlayerOne
    })
  }

  render() {
    const {cells} = this.state

    return (
      <div className="tic-tac-toe-container">
        <div className="row">
          <button onClick={() => this.play(0)}>{cells[0]}</button>
          <button onClick={() => this.play(1)}>{cells[1]}</button>
          <button onClick={() => this.play(2)}>{cells[2]}</button>
        </div>
        <div className="row">
          <button onClick={() => this.play(3)}>{cells[3]}</button>
          <button onClick={() => this.play(4)}>{cells[4]}</button>
          <button onClick={() => this.play(5)}>{cells[5]}</button>
        </div>
        <div className="row">
          <button onClick={() => this.play(6)}>{cells[6]}</button>
          <button onClick={() => this.play(7)}>{cells[7]}</button>
          <button onClick={() => this.play(8)}>{cells[8]}</button>
        </div>
      </div>
    )
  }
}

const checkWinner = cells => patterns.some(([p0, p1, p2]) => cells[p0] === cells[p1] && cells[p1] === cells[p2] && cells[p2] !== null)

const patterns = '012 345 678 036 147 258 048 246'
  .split(' ')
  .map(item => item.split(''))

class CounterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.subtract = subtract.bind(this)
  }

  add() {
    const {count} = this.state
    this.setState({
      count: count + 1
    })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <div className="counter-container">
          <button onClick={this.subtract}>-</button>
          <span>{this.state.count}</span>
          <button onClick={() => this.add()}>+</button>
        </div>
      </div>
    )
  }
}

function subtract() {
  const count = this.state.count - 1
  this.setState({count})
}

export default App
