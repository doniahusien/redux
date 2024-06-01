import React from 'react'
import buy_cakes from '../redux/cakes/cakesActions'
import { connect } from 'react-redux'
const CakeContainer = (props) => {
    return (
        <div>
            <h1>Number of cakes {props.numOfCakes }</h1>
            <button>Buy Cakes{onclick=props.buyCake }</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buy_cakes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)