import React from 'react'

class Item extends React.Component {
    render() {
        const { brand } = this.props
        return (
            <div style={{
                width: '100%',
                height: 50,                
                fontSize: 18,
                borderBottom: '0.1px solid grey'
            }}>
                <p style={{
                    paddingTop: 10
                }}>
                    {brand}
                </p>
            </div>
        )
    }
}

export default Item
