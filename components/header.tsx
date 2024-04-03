import React from 'react'
import { Balance } from './balance'
import { Timer } from './timer'

export const Header = () => {
    return (
        <div className="p-5 flex justify-between items-center">
            <Balance />
            <Timer />
        </div>
    )
}
