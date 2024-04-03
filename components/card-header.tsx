import React from 'react'
import { MdDoNotDisturb } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

export const CardHeader = ({ varient = "live" }) => {
    if (varient == "live") {

        return (
            <div className="card-header flex justify-between items-center p-2 text-[#7846d4]">
                <div className="flex gap-1 items-center" >
                    <FaRegCirclePlay />
                    Play
                </div>
                <p>#218486</p>
            </div>
        )
    }
    if (varient == "expired") {
        return (
            <div className="card-header flex justify-between items-center p-2 bg-gray-300 text text-gray-500">
                <div className="flex gap-1 items-center" >
                    <MdDoNotDisturb />
                    Experied
                </div>
                <p>#218486</p>
            </div>
        )
    }
    if (varient == "next") {
        return (
            <div className="card-header flex justify-between items-center p-2 bg-[#7846d4]  text-white">
                <div className="flex gap-1 items-center" >
                    <FaRegCirclePlay />
                    Next
                </div>
                <p>#218486</p>
            </div>
        )
    }
    if (varient == "later") {
        return (
            <div className="card-header flex justify-between items-center p-2 text-gray-800 bg-gray-100">
                <div className="flex gap-1 items-center" >
                    <CiTimer />
                    Later
                </div>
                <p>#218486</p>
            </div>
        )
    }
}
