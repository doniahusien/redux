import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cakes/cakeReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamReducer,
})