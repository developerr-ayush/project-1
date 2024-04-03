import React from 'react'
import { varient } from './card'

export const CardMiddle = ({ varient }: varient) => {
  if (varient == "live") {
    return (
      <div className="middle  border-[2px] border-[#ec4b9d] rounded-lg p-3 ">
        <div className="text-sm">Last Price</div>
        <div className="flex justify-between items-baseline">
          <h3 className='text-xl font-bold text-[#ec4b9d] border-b-2 border-black border-dotted'>$228.4421</h3>
          <p className='bg-[#ec4b9d] text-white px-3 py-1 rounded-sm'>$-0.4414</p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <p>Locked Price</p>
            <p>228.9473</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Price pool</p>
            <p>8.5143 BNB</p>
          </div>
        </div>
      </div>
    )
  }
  if (varient == "expired") {
    return (
      <div className="middle  border-[2px] border-[#ec4b9d] rounded-lg p-3 ">
        <div className="text-sm">Closed Price</div>
        <div className="flex justify-between items-baseline">
          <h3 className='text-xl font-bold text-[#ec4b9d] border-b-2 border-black border-dotted'>$228.4421</h3>
          <p className='bg-[#ec4b9d] text-white px-3 py-1 rounded-sm'>$-0.4414</p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <p>Locked Price</p>
            <p>228.9473</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Price pool</p>
            <p>8.5143 BNB</p>
          </div>
        </div>
      </div>
    )
  }
  if (varient == "next") {
    return (
      <div className="middle  border-[2px] border-green-500 rounded-lg p-3 ">
        <div className="flex justify-between items-center font-bold">
          <p>Price Pool</p>
          <p>2.3750 BNB</p>
        </div>
        <div className="buttons-group text-white mt-2">
          <button className='p-2 w-full rounded-md mb-1 bg-green-500'>Enter UP</button>
          <button className='p-2 w-full rounded-md mt-1 bg-[#ec4b9d]'>Enter Down</button>
        </div>
      </div>
    )
  }
  if (varient == "later") {
    return (
      <div className="middle text-center border-[2px] border-gray-400 rounded-lg p-3 ">
        <h3 className='font-bold text-md'>Entry Starts</h3>
        <h2 className='font-bold text-2xl'>~00:38</h2>
      </div>
    )
  }
}
