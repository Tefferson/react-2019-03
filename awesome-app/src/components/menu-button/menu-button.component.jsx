import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

class MenuButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.subtract = subtract.bind(this);
  }

  add() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  render() {
    return (
      <StyledButton onClick={() => this.props.history.push(this.props.path)}>
        <span className="icon">{this.props.Icon}</span>
        <br />
        <span>{this.props.title}</span>
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  background: #444;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.8);
  color: white;
  height: 125px;
  outline: 0;
  width: 125px;

  .icon {
    font-size: 24px;
  }

  &:hover {
    background: #666;
  }

  &:active {
    box-shadow: unset;
  }
`

function subtract() {
  const count = this.state.count - 1;
  this.setState({ count });
}

export default withRouter(MenuButtonComponent);
