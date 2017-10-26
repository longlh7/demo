import React from 'react'
import { connect } from 'react-redux'
import Body from '../../components/body/'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)

export default BodyContainer
