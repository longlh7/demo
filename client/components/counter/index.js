import React from 'react'

class Counter extends React.Component {
    render() {
        const { num } = this.props
        return(
          <div>
	    <h1>Counter</h1>
            <h1 style={{
                textAlign: 'center'
            }}>
              { num }
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
