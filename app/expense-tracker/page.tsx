import React from "react";

export default function expense() {
  return (
    <div
      className="py-10">
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
              <div className=" bg-gray-400 p-1 ">
                <div className="flex justify-between  ">
                  <small className=" font-semibold">something</small>
                  <small  className="font-semibold">-$ 0.00</small>
                </div>
              </div>
              
              <div className=" bg-gray-400 p-1 mt-2 ">
                <div className="flex justify-between  ">
                  <small className=" font-semibold">+$ 324</small>
                  <small  className=" bg-green-400 h-6 font-semibold">.</small>
                </div>
              </div>
             
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
              />
            </div>
            <br />
            <div className="flex flex-col">
              <small className=" mr-64 font-semibold">Amount</small>
              <div className="flex gap-2 ml-6  font-semibold">
                <input type="radio" />Income
                <input type="radio" />Expense
              </div>
              <input
                className=" text-black mt-2 ml-2 border border-black p-2 "
                type="text"
                placeholder="0"
              />
            </div>
            <button className=" mt-4 px-[104px] ml-2 h-10 text-white  bg-blue-900 ">
              Add transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
