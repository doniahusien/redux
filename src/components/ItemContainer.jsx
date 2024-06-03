import React from 'react'
import { connect } from 'react-redux'

const ItemContainer = (props) => {
    return (
        <div>
            <h1>ITEM {props.item}</h1>
        </div>
    )
    
}
const mapStateToProps = (state, ownProps) => {
        const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
        return {item};
    }
export default connect(mapStateToProps)(ItemContainer)