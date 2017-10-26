import React from 'react'
import ItemContainer from '../../containers/category/ItemContainer'

const cat = [
    {
      text: 'Solidbody',
      id: 'solid'
    },
    {
      text: 'Baritone',
      id: 'baritone'
    },
    {
      text: 'Hollow',
      id: 'hollow'
    },
    {
      text: 'Semi-Hollow',
      id: 'semi',
    },
    {
      text: '7-Strings',
      id: '7'
    },
    {
      text: '8-Strings',
      id: '8'
    },
    {
      text: 'Left-hand',
      id: 'left'
    }
]

class Category extends React.Component {
    render() {
        return (
            <div style={{
                width:'15%',
                height: '100%',
                borderRight:"0.1px solid grey"
            }}>
                { cat.map(c => <ItemContainer id={c.id} brand={c.text}/>) }
            </div>
        )
    }
}

export default Category
