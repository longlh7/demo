import React from 'react'
import { connect } from 'react-redux'
import Category from '../../components/category/'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category)

export default CategoryContainer
