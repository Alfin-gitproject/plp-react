import React from 'react'
import './counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/count/countSlice'
function Counter() {
  const count = useSelector((state) => state.count.count)
  const dispatch = useDispatch()
  return (
    <div className='counter'>
      <h1>Counter</h1>
      <h2>count is - {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
    </div>
  );
}

export default Counter

