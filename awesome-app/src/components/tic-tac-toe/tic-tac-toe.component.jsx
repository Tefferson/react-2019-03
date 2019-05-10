import React from 'react'
import styled from 'styled-components'
import { player } from '../../constants/tic-tac-toe.contants'
import { connect } from 'react-redux'
import { Creators as TicTacToeCreators } from '../../ducks/tic-tac-toe/tic-tac-toe'

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props)

        this.play = play.bind(this)
    }

    render() {
        const { cells } = this.props

        return (
            <StyledContainer border="burlywood">
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
            </StyledContainer>
        )
    }
}

function play(index) {
    if (this.props.gameover) {
        return
    }

    const cells = this.props.cells.slice()

    if (cells[index]) {
        return
    }

    cells[index] = this.props.isPlayerOne ? player.ONE : player.TWO

    this.props.setCells(cells)

    const hasWinner = checkWinner(cells)
    const gameover = hasWinner || cells.every(cell => cell !== null)
    if (gameover) {
        this.props.setGameOver()
        return
    }

    this.props.togglePlayer()
}

const StyledContainer = styled.div`
    background: ${props => props.border};
    border: 1px solid #ccc;
    padding: 15px;

    & > .row {
        display: flex;
    }

    .row:nth-child(1) > button:nth-child(1) {
        border-left: 0;
        border-top: 0;
    }

    .row:nth-child(1) > button:nth-child(2) {
        border-top: 0;
    }

    .row:nth-child(1) > button:nth-child(3) {
        border-right: 0;
        border-top: 0;
    }

    .row:nth-child(2) > button:nth-child(1) {
        border-left: 0;
    }

    .row:nth-child(2) > button:nth-child(3) {
        border-right: 0;
    }

    .row:nth-child(3) > button:nth-child(1) {
        border-bottom: 0;
        border-left: 0;
    }

    .row:nth-child(3) > button:nth-child(2) {
        border-bottom: 0;
    }

    .row:nth-child(3) > button:nth-child(3) {
        border-bottom: 0;
        border-right: 0;
    }

    button {
        background: transparent;
        border: 1px solid #444;
        cursor: pointer;
        height: 25px;
        outline: 0;
        text-align: center;
        width: 25px;
    }
`

const checkWinner = cells =>
    patterns.some(
        ([p0, p1, p2]) =>
            cells[p0] === cells[p1] &&
            cells[p1] === cells[p2] &&
            cells[p2] !== null
    )

const patterns = '012 345 678 036 147 258 048 246'
    .split(' ')
    .map(item => item.split(''))

const mapStateToProps = ({ ticTacToe }) => ({
    cells: ticTacToe.cells,
    gameover: ticTacToe.gameover,
    isPlayerOne: ticTacToe.isPlayerOne
})

const mapDispatchToProps = {
    setCells: TicTacToeCreators.setCells,
    setGameOver: TicTacToeCreators.setGameOver,
    togglePlayer: TicTacToeCreators.toggleIsPlayerOne
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicTacToeComponent)
