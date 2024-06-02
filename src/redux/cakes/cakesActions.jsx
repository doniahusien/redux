import { BUY_CAKE } from "./actionTypes"
import { BUY_CAKE_NUM } from "./actionTypes"
export const buy_cakes = () => {
    return {
        type:BUY_CAKE
    }
}

export const buyCakesByNum = (number) => {
    return {
        type: BUY_CAKE_NUM,
        payload:number
    }
}