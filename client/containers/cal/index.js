import React from 'react'
import { connect } from 'react-redux'
import Cal from '../../components/cal/'
import { increase, decrease, getCount } from '../../actions/restful'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    increaseNum: () => {
        dispatch(increase())
    },
    decreaseNum: () => {
        dispatch(decrease())
    }
})



const CalContainer = connect(mapStateToProps, mapDispatchToProps)(Cal)

export default CalContainer
