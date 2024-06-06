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
  const {transaction,addTransaction} = useContext(CounterContext)
  return (
<div>
<div>{transaction?.map((item)=>{
  return <h1>{item?.amount}</h1>
})}</div>
<button onClick={()=>addTransaction({
  id:0,
  description:"test",
  amount:100,
  type:"income"
})}>Add</button>
</div>  )
}
