import React  from 'react';
import { useSelector , useDispatch} from 'react-redux'
import {increment ,decrement } from '../actions/index'

const Count = () => {
    const dispatch = useDispatch()

    const myState = useSelector((state)=> state.changeNumber)

    console.log('number ',myState);

    return (
        <>
            <h1>Hello i am here count</h1>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <h1>{myState}</h1>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    )
}

export default Count
