import React from "react";
import { Button } from "antd";
import { useStopwatch } from "react-timer-hook";

export default function Stopwatch() {


    const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autostart: false })




    return (

        <div className="text-slate-600 flex flex-col items-center font-extrabold gap-1">
            <p className="text-xs">STOPWATCH</p>
            <div className="flex flex-row items-center justify-around mb-1">
                <p>{minutes} :</p>
                <p className=" w-[24px] pl-1 flex justify-start">{seconds}</p>
            </div>
            <div className="header-c-sub">
                <Button type="primary" className="bg-blue-600 font-semibold" onClick={start}>START</Button>
                <Button type="primary" className="font-semibold" danger onClick={pause}>STOP</Button>
                <Button type="primary" className="font-semibold" danger onClick={reset}>RESET</Button>
            </div>
        </div>




    )
}