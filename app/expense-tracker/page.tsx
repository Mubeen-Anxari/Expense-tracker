"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../counterContext/counterContext";
import { ImCross } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";

export default function expense() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"income" | "expense">("income");
  const { transaction, addTransaction, deleteTransaction } =
    useContext(CounterContext);
  // console.log(addTransaction);
  const income = transaction?.filter((item) => item.type === 'income').reduce((accumolator,currentValue)=>{
    return accumolator + currentValue?.amount
  });
  const expense = transaction?.filter((item) => item.type === 'expense');
  // console.log(income);
  // console.log(expense);
  
 
  

  return (
    <div className="py-10">
      <div className="bg-white">
        <div className=" px-10 flex   justify-center mt-20 text-center">
          <div>
            <h1 className=" text-red-600 font-bold">
              Develop by Mubeen Ansari
            </h1>
            <h1 className=" font-medium ">Expense Tracker</h1>
            <small className="mr-52 mt-8">YOUR BALANCE</small>
            <br />
            <big className="mr-60">$ 0.00</big>
            <br />
            <br />
            <div className=" flex gap-10 ml-16 mt-2 shadow-white ">
              <div className=" flex flex-col">
                <small className="">INCOME</small>
                <small style={{ color: "green" }}>$ 0.00</small>
              </div>
              <div className=" flex flex-col">
                <small>EXPENSE</small>
                <small style={{ color: "red" }}>$ 0.00</small>
              </div>
            </div>
            <small className="mr-52 mt-4 font-semibold">
              Transaction History
            </small>
            <hr className="mt-2" />
            <div>
              <br />

              {transaction?.map((item) => {
                return (
                  <div className=" bg-gray-400 p-1 mt-2 ">
                    <div className=" flex justify-between gap-2  ">
                      <small className=" font-semibold">
                        {item?.description}
                      </small>
                      <div className="flex gap-2">
                        <small className="font-semibold">{item?.amount}</small>
                        <ImCross
                          className=" cursor-pointer"
                          onClick={() => deleteTransaction(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <small className="mr-52 font-semibold"> Add New Transaction </small>
            <hr className="mt-2" />
            <br />
            <div className="flex flex-col">
              <small className="font-semibold mr-72">Text</small>
              <input
                className="text-black mt-2 ml-2 border border-black p-2 "
                type="text"
                placeholder="Enter the text......"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <br />
            <div className="flex flex-col">
              <small className=" mr-64 font-semibold">Amount</small>
              <div className="flex gap-2 ml-6  font-semibold">
                <input
                  onChange={(e) => setType(e.target.value as "income")}
                  type="radio"
                  id="income"
                  name="fav_language"
                  value="income"
                />
                Income
                <input
                  onChange={(e) => setType(e.target.value as "income")}
                  type="radio"
                  id="expense"
                  name="fav_language"
                  value="expense"
                />

                expense
              </div>
              <input
                className=" text-black mt-2 ml-2 border border-black p-2 "
                type="text"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <button
              onClick={() =>
                addTransaction({
                  id: uuidv4(),
                  description: description,
                  amount: amount,
                  type: type,
                })
              }
              className=" mt-4 px-[104px] ml-2 h-10 text-white  bg-blue-900 "
            >
              Add transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
