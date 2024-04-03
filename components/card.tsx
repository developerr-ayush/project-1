import React from 'react'
import { CardHeader } from './card-header'
import { CardMiddle } from './card-middle'
import { CardTop } from './card-top'
import { CardBottom } from './card-bottom'
export interface varient {
  varient: string
}
export const Card = ({ varient }: varient) => {
  return (
    <div className={'w-full overflow-hidden bg-white rounded-2xl border-2 border-blue-700' + (varient == 'expired' ? ' opacity-60' : "")}>
      <CardHeader varient={varient} />
      <div className="card-body p-5">
        <CardTop varient={varient} />
        <CardMiddle varient={varient} />
        <CardBottom varient={varient} />
      </div>
    </div>
  )
}
