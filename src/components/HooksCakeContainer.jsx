import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buy_cakes from '../redux/cakes/cakesActions'

const HooksCakeContainer = () => {
    const data = useSelector(state => state.numOfCakes)
    const dispatch= useDispatch()
    return (
        <>
            <h1>number of cakes{data}</h1>
            <button>buycakes{onclick=()=>dispatch(buy_cakes())}</button>

        </>
    )
}

export default HooksCakeContainer