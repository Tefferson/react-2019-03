import React from 'react'
import Counter from '../../components/counter/counter.component'

class Conter extends React.Component {
    render() {
        return (
            <div>
                <input
                    value="voltar"
                    type="button"
                    onClick={() => this.props.history.goBack()}
                />
                <Counter />
            </div>
        )
    }
}

export default Conter
