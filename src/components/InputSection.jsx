import React, { useRef } from "react"
import Home from "./Home"
import { Button, Input } from "antd"


export default function InputSection({addNewPlayer }) {

    const inptRef = useRef('');
        
    
    let handleClick = () => {
        
            addNewPlayer(inptRef.current.value);
            inptRef.current.value="";
    }




    return (
        <div className=" border-t px-4 pt-6 pb-6 w-full flex flex-row items-center justify-between">
            <input className="w-[70%]" placeholder={"enter a playes/s name"} ref={inptRef}  ></input>
            <Button onClick={handleClick} type="primary" className="bg-blue-600 mr-8 font-semibold" >Add player</Button>
        </div>
    )


}