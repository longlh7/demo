import React from 'react'

class Counter extends React.Component {
    render() {
        const { num } = this.props
        return(
          <div>
            <h1 style={{
                textAlign: 'center'
            }}>
              { num != undefined? num: 'Cannot connect to server' }
            </h1>
          </div>
        )
    }

    componentDidMount() {
        const { getCount } = this.props
        getCount()
    }
}

export default Counter
