import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
