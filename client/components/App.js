import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import CalContainer from '../containers/cal/'
import CounterContainer from '../containers/counter/'

class App extends React.Component {
  render () {
    return (
      <div style={{
          width: 200,
          height: 200,
      }}>
        <CounterContainer/>
        <CalContainer/>
      </div>
    )
  }
}

export default App
