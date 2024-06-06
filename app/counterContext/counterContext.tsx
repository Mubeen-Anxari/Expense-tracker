// import React, { createContext, useState } from "react";
// type providerType={
//     counter:Number,
//     setCounter:React.Dispatch<React.SetStateAction<number>>;

// }
// const CounterContext = createContext<providerType>({
//     counter:0,
//     setCounter:()=>null
// });
// const CounterContextProvider = ({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) => {
//     const [counter, setCounter] = useState(0)
//   return(
//     <CounterContext.Provider value={{counter,setCounter}}>
//         {children}
//     </CounterContext.Provider>
//   )
// };
// export {CounterContextProvider,CounterContext}

import { createContext, useState } from "react";
type expenseTrackerType={
    description:string
    amount:number
    type: "income" | "expense"
}



type providerType = {
  transaction: expenseTrackerType[];
  setTransaction: React.Dispatch<React.SetStateAction<expenseTrackerType[]>>;
};
const CounterContext = createContext<providerType>({
    transaction: [],
    setTransaction: () => null,
});
const CounterContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [transaction, setTransaction] = useState<expenseTrackerType[]>([]);
 const addTransaction=(data:providerType)=>{
    setTransaction([...transaction])

 }
  return (
    <CounterContext.Provider value={{ transaction,addTransaction}}>
      {children}
    </CounterContext.Provider>
  );
};
export { CounterContextProvider, CounterContext };
