import { BUY_ICECREAM } from "./actionTypes"

const initial = {
    numOfIceCream:13
}
const iceCreamReducer = (state=initial,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfIceCream:state.numOfIceCream-1,
            }
        default:
            return state;
    }
}
export default iceCreamReducer;