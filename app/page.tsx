// "use client";

// import { useContext } from "react";
// import { CounterContext } from "./counterContext/counterContext";
// export default function Home() {
//   let counterValue = useContext(CounterContext);
//   return (
//     <div>
//       <h1>{counterValue.counter}</h1>
//       <button onClick={() => counterValue.setCounter(10)}>add</button>
//     </div>
//   );
// }
"use client"






import {useContext} from 'react'
import { CounterContext } from './counterContext/counterContext'

export default function Home() {
  const countValue = useContext(CounterContext)
  return (
<div>
<div>{countValue?.count}</div>
<button onClick={()=>countValue.setCount(10)}>Add</button>
</div>  )
}
