import React from "react";
import { Button } from "antd";


export default function Stopwatch() {


    return (
        
        <div className="text-slate-600 flex flex-col items-center font-extrabold gap-1">
        <p className="text-xs">STOPWATCH</p>
        <p>0</p>
        <div className="header-c-sub">
            <Button  type="primary" className="bg-blue-600 font-semibold">START</Button>
            <Button type="primary" className="font-semibold" danger>RESET</Button>
        </div>
    </div>
                
                
        
        
    )
}