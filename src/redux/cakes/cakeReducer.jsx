import { BUY_CAKE } from "./actionTypes"
import { BUY_CAKE_NUM } from "./actionTypes"
const initial = {
    numOfCakes:10,
}
const cakeReducer = (state = initial, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes:state.numOfCakes-1,
            }
        case BUY_CAKE_NUM:
            return {
                numOfCakes: state.numOfCakes - action.payload,
            }
        default:
            return state;
    }
}
export default cakeReducer;