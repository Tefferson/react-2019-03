import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

class MenuButtonComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.subtract = subtract.bind(this)
    }

    add() {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    render() {
        return (
            <StyledButton onClick={() => this.props.history.push(this.props.path)}>
                {this.props.Icon}
                <span>{this.props.title}</span>
            </StyledButton>
        )
    }
}

const StyledButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 15px;
`

function subtract() {
    const count = this.state.count - 1
    this.setState({ count })
}

export default withRouter(MenuButtonComponent)
