import { Button, AutoComplete, Input } from "antd";
import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Players from "./Players";
import InputSection from "./InputSection";
import { id } from "ethers";


export default function Home() {



    let [players, setPlayers] = useState([
        {
            id: 1,
            score: 12,
            name: "Paul",
        },
        {
            id: 2,
            score: 0,
            name: "Mihai",
        },
        {
            id: 3,
            score: 0,
            name: "Anton",
        },
        {
            id: 4,
            score: 30,
            name: "Daniela",
        },
        {
            id: 5,
            score: 0,
            name: "Maria",
        }
    ])

    let [addPlayer, setAddPlayer] = useState({})




    let changeScore = (playerId, points) => {

        // define same array 
        let arr = [...players];


        for (let i = 0; i < arr.length; i++) {

            if (arr[i].id == playerId) {

                arr[i].score += points;
            }
        }

        // save same array with modifications
        setPlayers(arr);

    }


    let newPlayer = (element) => {
        element.preventDefault();

        // console.log(element)
        let obj = element.target;

        let ids = players.map(e => e.id)

        let id = Math.floor(Math.random() * 50 + 1)

        while (ids.includes(id) === true) {
            id = Math.floor(Math.random() * 50 + 1);
        }

        let newP = {
            id: id,
            score: 0,
            name: obj.value

        }
        
        setAddPlayer(newP)
        
        // console.log(addPlayer)
    }


    let addNewPlayer = () => {

        let arr = [...players];
        arr.push(addPlayer);
        setPlayers(arr)
        
    }


    let deletePlayer = (id) => {
        let arr = players.filter(e => e.id !== id)
        setPlayers(arr);
        // console.log(arr)
    }





    return (

        // header , players  has data props, which is players, but the props is data, so when imported in the component, will not pass the props value, but the props name 

        <div className="w-full max-w-2xl flex flex-col gap-2 rounded-md shadow-[0_30px_150px_rgba(8,_112,_184,_0.9)]  bg-slate-100">
            <Header data={players} />
            <Players data={players} handleScore={changeScore} deletePlayer={deletePlayer} />
            <InputSection playerInput={newPlayer} addNewPlayer={addNewPlayer} />
        </div>
    )
}