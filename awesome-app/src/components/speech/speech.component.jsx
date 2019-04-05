import React from 'react'
import Flag from 'react-flagkit'
import styled from 'styled-components'

class SpeechComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            voices: []
        }

        speechSynthesis.onvoiceschanged = () => this.setState({
            voices: speechSynthesis.getVoices()
        })
    }

    render() {
        return (
            <StyledContainer>
                <input className="text" onChange={e => this.setState({text: e.target.value})}/>
                <ul>
                    {this
                        .state
                        .voices
                        .map((voice, index) => (<ListItem
                            key={index}
                            name={voice.name}
                            lang={voice.lang}
                            speak={() => speak(voice, this.state.text)}/>))}
                </ul>
            </StyledContainer>
        )
    }
}

function speak(voice, text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = voice.lang
    speechSynthesis.speak(utterance)
}

const ListItem = props => (
    <li>
        <div className="left">
            <span>Nome: {props.name}</span>
            <Flag country={props.lang.split('-').pop()} />
        </div>
        <div>
            <input type="button" value="falar" onClick={props.speak}/>
        </div>
    </li>
)

const StyledContainer = styled.div `
    align-items: center;
    color: #666;
    display: flex;
    flex-direction: column;

    .text {
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: 0;
        padding: 5px;
    }

    input[type="button"] {
        background: transparent;
        border: 1px solid #777;
        border-radius: 5px;
        cursor: pointer;
        outline: 0;

        &:active {
            background: #eaeaea;
        }
    }

    ul {
        padding: 0;
        max-width: 300px;
    }

    li {
        border: 1px solid #dadada;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 5px 15px;

        .left {
            display: flex;
            flex-direction: column;
        }
    }
`

export default SpeechComponent