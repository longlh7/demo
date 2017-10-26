import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class Home extends React.Component {
  render () {
    const { keyy, mapp, change } =  this.props
    return (
      <div>
          <table>
            <tbody>
              {
                keyy.map((id, index) =>
                    {
                      const { text, status } = mapp[id]
                      return (
                        <tr style={{marginBottom: 10}} key={id}>
                            <td style={{width: '30'}}>{index+1}</td>
                            <td style={{width: '300'}}>{text}</td>
                            <td style={{color: status? 'green': 'red', width: '160'}}>{status? 'IN STOCK': 'SOLD OUT'}</td>
                            <td><button onClick={() => change(id)} className="btn btn-default">Change</button></td>
                        </tr>
                      )
                    }
                )
              }
              </tbody>
          </table>
      </div>

    )
  }
}

export default Home
