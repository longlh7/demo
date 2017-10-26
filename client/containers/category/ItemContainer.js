import React from 'react'
import { connect } from 'react-redux'
import Item from '../../components/category/Item'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)

export default ItemContainer
