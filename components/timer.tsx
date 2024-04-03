import React from 'react'
import { Clock } from './icon/clock'

export const Timer = () => {
    return (
        <div className='relative flex gap-3 items-baseline bg-white pl-3 pr-[3rem] py-1 rounded-[50vmax] w-max ml-auto'>
            <h3 className="text-xl font-bold">00:38</h3>
            <p className="text-sm">5m</p>
            <div className="absolute -right-4 bottom-0 w-[3.3rem]">
                <Clock />
            </div>
        </div>
    )
}
