import React from 'react'
import { Balance } from './balance'
import { Timer } from './timer'

export const Header = () => {
    return (
        <div className="p-5 grid gap-10 md:flex md:justify-between md:items-center">
            <Balance />
            <Timer />
        </div>
    )
}
