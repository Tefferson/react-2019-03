import React from 'react'
import styled from 'styled-components'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

class PaginationComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            data: []
        }

        this.nextPage = nextPage.bind(this)
        this.previousPage = previousPage.bind(this)
    }

    componentDidMount() {
        this.nextPage()
    }

    render() {
        return (
            <StyledContainer>
                <div>
                    <button
                        className={`button animated scale-on-hover ${this.state.page > 1
                        ? 'visible'
                        : 'invisible'}`}
                        onClick={this.previousPage}>
                        <FaArrowLeft/>
                    </button>
                </div>
                <div className="items-wrapper">{this
                        .props
                        .renderItems(this.state.data)}</div>
                <div>
                    <button className="button animated scale-on-hover" onClick={this.nextPage}>
                        <FaArrowRight/>
                    </button>
                </div>
            </StyledContainer>
        )
    }
}

const StyledContainer = styled.div `
    align-items: center;
    display: flex;

    .button {
        align-items: center;
        background: linear-gradient(to top right, #FF5722, #FFC107);
        border: 0;
        border-radius: 50%;
        color: white;
        display: flex;
        height: 25px;
        outline: 0;
        width: 25px;

        &:active {
            background: linear-gradient(to top right, #FFC107, #FF5722);
        }
    }

    .items-wrapper {
    }
`

function previousPage() {
    if (this.state.page <= 1) {
        return
    }
    this.setState({
        page: this.state.page - 1
    }, () => this.props.getItems(this.state.page).then(data => this.setState({data})))
}

function nextPage() {
    this.setState({
        page: this.state.page + 1
    }, () => this.props.getItems(this.state.page).then(data => this.setState({data})))
}

export default PaginationComponent