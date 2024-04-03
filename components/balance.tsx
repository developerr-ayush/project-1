import React from 'react'
import { Coin } from './icon/coin'

export const Balance = () => {
    return (
        <div className='flex gap-3 items-baseline bg-white pr-6 py-1 rounded-[50vmax] w-max relative pl-[3rem]'>
            <div className="absolute -left-3 bottom-0 h-10">
                <Coin />
            </div>
            <h3 className='text-xl font-bold'>BNBUSB</h3>
            <p className='text-sm'>$235,323</p>
        </div>
    )
}
