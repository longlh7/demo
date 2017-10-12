import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class App extends React.Component {

  componentDidMount() {
      this.props.getCategory()
  }

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
                        <tr style={{marginBottom: 10}}>
                            <td style={{width: '30'}}>{index+1}</td>
                            <td style={{width: '300'}}>{text}</td>
                            <td key={id} style={{color: status? 'green': 'red', width: '160'}}>{status? 'IN STOCK': 'SOLD OUT'}</td>
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

App.propTypes = {
    keyy: PropTypes.array.isRequired,
    mapp: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired
}

export default App
