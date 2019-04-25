import React from 'react'
import TicTacToeComponent from '../../components/tic-tac-toe/tic-tac-toe.component'

class TicTacToePage extends React.Component {
    render() {
        return (
            <div>
                <input
                    value="voltar"
                    type="button"
                    onClick={() => this.props.history.goBack()}
                />
                <TicTacToeComponent />
            </div>
        )
    }
}

export default TicTacToePage
