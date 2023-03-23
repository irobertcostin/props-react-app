import React from "react"
import Home from "./Home"
import { Button,Input } from "antd"


export default function InputSection({playerInput,addNewPlayer}) {

    return (
        <div className=" border-t px-4 pt-6 pb-6 w-full flex flex-row items-center justify-between">
            <Input onChange={playerInput} className="w-[70%]" placeholder={"enter a playes/s name"}></Input>
            <Button onClick={addNewPlayer}  type="primary" className="bg-blue-600 mr-8 font-semibold" >Add player</Button>
        </div>
    )


}