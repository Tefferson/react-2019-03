import React from 'react'
import styled from 'styled-components'
import JsonPlaceholderService from './services/json-placeholder.service';

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
      src: ''
    }
  }

  componentDidMount() {
    JsonPlaceholderService
      .getPosts()
      .then(console.log)
  }

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ src: e.target.value })} />
        <img src={this.state.src} />
      </div>
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
