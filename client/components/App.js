import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import CategoryContainer from '../containers/category/'
import NavigatorContainer from '../containers/navigator/'
import BodyContainer from '../containers/body/'

class App extends React.Component {
  render () {
    return (
      <div>
          <NavigatorContainer/>
          <table style={{width: '100%', height: '100%'}}>
              <tbody style={{width: '100%', height: '100%'}}>
                  <tr style={{width: '100%', height: '100%'}}>
                      <td style={{width: '100%', height: '100%'}}><CategoryContainer/></td>
                      <td style={{width: '100%', height: '100%'}}><BodyContainer/></td>
                  </tr>
              </tbody>
          </table>


      </div>
    )
  }
}

export default App
