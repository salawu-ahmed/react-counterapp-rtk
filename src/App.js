import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, resetCounter } from './redux/counter'
import '../src/App.css'

function App() {
  const {count} = useSelector(state => state.counter)
  //the useSleector helps us to read a variable from a redux reducer/store
  const dispatch = useDispatch()
  // the dispatch is used to call any action from any reducer 
  return (
    <div className="App">
      <h1>the count is: {count}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(33))}>increment By 33</button>
      <button onClick={()=>dispatch(resetCounter())}>reset counter</button>
    </div>

  );
}

export default App;
