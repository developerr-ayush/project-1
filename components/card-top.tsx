import React from 'react'
import { varient } from './card'

export const CardTop = ({ varient }:varient) => {
    if (varient == "expired")
        return (
            <div className="top h-[4.5rem] grid place-items-center text-center bg-gray-200 clippath mx-7 p-3">
                <h4 className='text-green-500 font-bold'>UP</h4>
                <p className='text-sm'><b>2.15x</b> Payout</p>
            </div>
        )

    if (varient == "live") {
        return (
            <div className="top h-[4.5rem] grid place-items-center text-center bg-gray-200 clippath mx-7 p-3">
                <h4 className='text-green-500 font-bold'>UP</h4>
                <p className='text-sm'><b>2.15x</b> Payout</p>
            </div>
        )
    }
    if (varient == "next") {
        return (
            <div className="top h-[4.5rem] grid place-items-center text-center bg-gray-200 clippath mx-7 p-3">
                <h4 className='text-green-500 font-bold'>UP</h4>
                <p className='text-sm'><b>2.15x</b> Payout</p>
            </div>
        )
    }
    if (varient == "later") {
        return (
            <div className="top h-[4.5rem] grid place-items-center text-center bg-gray-200 clippath mx-7 p-3">
                <h4 className='text-gray-400 font-bold'>UP</h4>
            </div>
        )
    }
}
