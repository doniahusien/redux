import { BUY_CAKE } from "./actionTypes"

const initial = {
    numOfCakes:10,
}
const cakeReducer = (state = initial, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes:state.numOfCakes-1,
            }
        default:
            return state;
    }
}
export default cakeReducer;