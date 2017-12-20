import React from 'react'

class Cal extends React.Component {
    render() {
        const { increaseNum, decreaseNum } = this.props
        return (
          <div>
            <input style={styles} className="btn btn-default" defaultValue="-"
              onClick={() => decreaseNum()}/>
            <input style={styles} className="btn btn-default" defaultValue="+"
              onClick={() => increaseNum()}/>
          </div>
        )
    }
}

const styles = {
  width: '50%',
}
export default Cal
