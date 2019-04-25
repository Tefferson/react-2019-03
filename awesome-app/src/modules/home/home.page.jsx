import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <input value="contador" 
                type="button" 
                onClick={() => this.props.history.push('contador')}/>
                <span>HOME</span>
            </div>
        )
    }
}

export default HomePage