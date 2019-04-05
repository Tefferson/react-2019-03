import React from 'react'
import styled from 'styled-components'

class CounterComponent extends React.Component {
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
            <StyledContainer>
                <h1>{this.props.name}</h1>
                <div className="counter-container">
                    <button onClick={this.subtract}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={() => this.add()}>+</button>
                </div>
            </StyledContainer>
        )
    }
}

const StyledContainer = styled.div `
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 15px;
`

function subtract() {
    const count = this.state.count - 1
    this.setState({count})
}

export default CounterComponent