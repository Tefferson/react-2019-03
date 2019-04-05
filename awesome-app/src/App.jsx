import React from 'react'
import Speech from './components/speech/speech.component'
import styled from 'styled-components'
import Counter from './components/counter/counter.component'
import TicTacToe from './components/tic-tac-toe/tic-tac-toe.component'

const people = [
  {
    name: 'Victor',
    age: '21'
  }, {
    name: 'Léi',
    age: '21'
  }, {
    name: 'Pablo',
    age: '29'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.textRef = React.createRef()

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Speech />
      // <div>
      //   <input
      //     ref={this.textRef}
      //     onChange={e => this.setState({text: e.target.value})}
      //     value={this.state.text}/> {/* {people.map((item, index) => (<PersonItem key={index} {...item}/>))} */}
        
      //   <input type="button" value="primir" onClick={() => (this.textRef.current.value = 'oi')}/>
      // </div>
    )
  }
}

const PersonItem = props => (
  <StyledPersonItem>
    <span>Nome: {props.name}</span>
    <span>Idade: {props.age}</span>
  </StyledPersonItem>
)

const StyledPersonItem = styled.div `
  border: 1px solid #dadada;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 200px;
`

export default App
