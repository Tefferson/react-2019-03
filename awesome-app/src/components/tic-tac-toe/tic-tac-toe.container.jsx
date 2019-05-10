import React from 'react'
import TicTacToeComponent from './tic-tac-toe.component'
import { player } from '../../constants/tic-tac-toe.contants'
import { connect } from 'react-redux'
import { Creators as TicTacToeCreators } from '../../ducks/tic-tac-toe/tic-tac-toe'

class TicTacToe extends React.Component {
	constructor(props) {
		super(props)

		this.play = play.bind(this)
	}

	render() {
		const { cells } = this.props

		return <TicTacToeComponent {...{ play: this.play, cells }} />
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

const checkWinner = cells =>
	patterns.some(
		([p0, p1, p2]) =>
			cells[p0] === cells[p1] && cells[p1] === cells[p2] && cells[p2] !== null
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
)(TicTacToe)
