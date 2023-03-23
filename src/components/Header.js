import React from "react";
import { Button } from "antd";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";

export default function Header({data}) {


    return (
        <>
            <div className="header w-full px-4">
                
                <Counter players={data}/>
                <Stopwatch/>
            </div>
        </>
    )
}