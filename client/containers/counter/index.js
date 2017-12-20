import React from 'react'
import { connect } from 'react-redux'
import Counter from '../../components/counter/'
import { getCount } from '../../actions/restful'

const mapStateToProps = (state, ownProps) => {
    const { num } = state.counter
    return {
        num,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getCount: () => {
        dispatch(getCount())
    }
})



const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer
