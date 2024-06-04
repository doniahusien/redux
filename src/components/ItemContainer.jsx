import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { buy_cakes } from '../redux/cakes/cakesActions'
import buy_iceCream from '../redux/iceCream/iceCreamActions'
const ItemContainer = (props) => {
    return (
        <div>
            <h1>ITEM {props.item}</h1>
            <button onClick={props.dispatchFun}>Buy </button>
        </div>
    )
    
}
const mapStateToProps = (state, ownProps) => {
        const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
        return {item};
    }

const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFun = ownProps.cake ? () => dispatch(buy_cakes()) : () =>
        dispatch(buy_iceCream())
    return {
        dispatchFun
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)