import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { changeStatus } from '../actions/change'
import { getCategory } from '../actions/category'

const mapStateToProps = (state, ownProps) => {
    // console.log('STATE: ', state);
    const { keyy, mapp } = state.category
    return {
        keyy,
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    change: (id) => {
        dispatch(changeStatus(id))
    },
    getCategory: () => {
        // dispatch(getCategory())
    }
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
