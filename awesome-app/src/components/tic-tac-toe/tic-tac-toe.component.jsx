import React from 'react'
import styled from 'styled-components'

const TicTacToeComponent = ({ play, cells }) => (
	<StyledContainer border='burlywood'>
		<div className='row'>
			<button onClick={() => play(0)}>{cells[0]}</button>
			<button onClick={() => play(1)}>{cells[1]}</button>
			<button onClick={() => play(2)}>{cells[2]}</button>
		</div>
		<div className='row'>
			<button onClick={() => play(3)}>{cells[3]}</button>
			<button onClick={() => play(4)}>{cells[4]}</button>
			<button onClick={() => play(5)}>{cells[5]}</button>
		</div>
		<div className='row'>
			<button onClick={() => play(6)}>{cells[6]}</button>
			<button onClick={() => play(7)}>{cells[7]}</button>
			<button onClick={() => play(8)}>{cells[8]}</button>
		</div>
	</StyledContainer>
)

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

export default TicTacToeComponent
