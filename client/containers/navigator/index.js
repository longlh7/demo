import React from 'react'
import { connect } from 'react-redux'
import Navigator from '../../components/navigator/'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const NavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(Navigator)

export default NavigatorContainer
