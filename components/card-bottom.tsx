import React from 'react'
import { varient } from './card'

export const CardBottom = ({ varient }:varient) => {
    if (varient == "expired")
        return (
            <div className="bottom h-[4.5rem] grid place-items-center text-center clippath-inv p-3 mx-7 text-white bg-[#ec4b9d]">
                <p className='text-sm'><b>1.67x</b> Payout</p>
                <h4 className=' font-bold'>DOWN</h4>
            </div>
        )

    if (varient == "live") {
        return (
            <div className="bottom h-[4.5rem] grid place-items-center text-center clippath-inv p-3 mx-7 text-white bg-[#ec4b9d]">
                <p className='text-sm'><b>1.67x</b> Payout</p>
                <h4 className=' font-bold'>DOWN</h4>
            </div>
        )
    }
    if (varient == "next") {
        return (
            <div className="bottom h-[4.5rem] grid place-items-center text-center clippath-inv p-3 mx-7 text-white bg-[#ec4b9d]">
                <p className='text-sm'><b>1.67x</b> Payout</p>
                <h4 className=' font-bold'>DOWN</h4>
            </div>
        )
    }
    if (varient == "later") {
        return (
            <div className="bottom h-[4.5rem] grid place-items-center text-center clippath-inv p-3 mx-7 text-gray-400 bg-gray-300">
                <h4 className=' font-bold'>DOWN</h4>
            </div>
        )
    }
}
