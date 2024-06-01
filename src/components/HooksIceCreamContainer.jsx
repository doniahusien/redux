import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buy_iceCream from '../redux/iceCream/iceCreamActions'

const HooksIceCreamContainer = () => {
    const data = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Number of IceCreams :{data}</h1>
            <button onClick={()=>{dispatch(buy_iceCream())}}>Buy IceCream</button>
        </>
    )
}

export default HooksIceCreamContainer