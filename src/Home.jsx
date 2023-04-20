import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const {c} = useSelector(state => state.costom)

    const addBtn = () => {
        dispatch({
            type: "Increment",
        })
    };

    const addBtnn = () => {
        dispatch({
            type: "IncrementBy",
            paylode: 20
        })
    };

    const subBtn = () => {
        dispatch({
            type: "Decrement",
        })
    };

  return (
    <div>
        <h1>{c}</h1>

        <button onClick={addBtn}>Increment</button>
        <button onClick={addBtnn}>IncrementBy</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home