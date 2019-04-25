import React from 'react'
import SpeechComponent from '../../components/speech/speech.component'

class SpeechPage extends React.Component {
    render() {
        return (
            <div>
                <input
                    value="voltar"
                    type="button"
                    onClick={() => this.props.history.goBack()}
                />
                <SpeechComponent />
            </div>
        )
    }
}

export default SpeechPage
