import React from 'react'
import UpdateCounter from './components/updateCounter'

class ClickIncrementCounter extends React.Component {
    render(){
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdateCounter(ClickIncrementCounter);