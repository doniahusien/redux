import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buy_cakes} from '../redux/cakes/cakesActions'

const HooksCakeContainer = () => {
    const dat = useSelector(state => state.cake.numOfCakes)
    const dispatch= useDispatch()
    return (
        <>
            <h1>number of cakes{dat}</h1>
            <button onClick={()=>dispatch(buy_cakes())}>buycakes</button>

        </>
    )
}

export default HooksCakeContainer