import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCakesByNum} from '../redux/cakes/cakesActions';
const NewContainer = () => {
    const [num, setNum] = useState(1);
    const cake = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>cakes number{cake }</h1>
            <input type="text" onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>dispatch(buyCakesByNum(num))}>BUY cake{num }</button>
        </div>
    )
}

export default NewContainer