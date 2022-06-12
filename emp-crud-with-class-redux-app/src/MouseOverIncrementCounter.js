import React from 'react'
import UpdateCounter from './components/updateCounter'

class MouseOverIncrementCounter extends React.Component {
    render(){
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onMouseOver={incrementCount}>Mouse Over {count} times</button>
            </div>
        )
    }
}

export default UpdateCounter(MouseOverIncrementCounter);