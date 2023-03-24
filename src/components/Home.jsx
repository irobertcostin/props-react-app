import { Button, AutoComplete, Input, Alert } from "antd";
import React, { Suspense, useState } from "react";
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



    let [errors, setErrors] = useState();
    let [success, setSuccess] = useState();

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


    let newPlayer = (value) => {



        let ids = players.map(e => e.id)

        let id = Math.floor(Math.random() * 50 + 1)

        while (ids.includes(id) === true) {
            id = Math.floor(Math.random() * 50 + 1);
        }


        let newP = {
            id: id,
            score: 0,
            name: value
        }


        // state e boolean true/false , daca lungimea arrayului determinat de filtrul nume in arrayul players este mai mare decat 0
        let state = players.filter(e => e.name.toLowerCase() === newP.name.toLowerCase()).length > 0;
        // console.log(state)

        // daca value e diferit de nimic si !state este false , adica lungimea e 0 

        if (value !== "" && !state) {

            // array nou oglinda players
            let arr = [...players];
            // impins player nou 
            arr.push(newP);

            // salvam state players 
            setPlayers(arr);
            // console.log(success)
            //state succes e true 
            setSuccess(true);

        } else {
            console.log("aici")

            // state erori este true
            setErrors(true);
        }
    }




    // console.log(addPlayer)




    let deletePlayer = (id) => {
        let arr = players.filter(e => e.id !== id)
        setPlayers(arr);
        // console.log(arr)
    }





    return (

        // header , players  has data props, which is players, but the props is data, so when imported in the component, will not pass the props value, but the props name 

        <div className="w-full max-w-2xl flex flex-col gap-2 rounded-md shadow-[0_30px_150px_rgba(8,_112,_184,_0.9)]  bg-slate-100 relative">
            <Header data={players} />
            <Players data={players} handleScore={changeScore} deletePlayer={deletePlayer} />
            <InputSection addNewPlayer={newPlayer} errors={errors} />
            {
                success ?
                    <Alert
                        className="absolute bottom-[-100px]"
                        message="Success"
                        description={success}
                        type="success"
                        showIcon
                        closable
                    />
                    :
                    <Alert className="absolute bottom-[-100px]"
                        message="No given name"
                        description={errors}
                        type="error"
                        showIcon
                        closable
                    />
            }
        </div>
    )
}




// success?
// <Alert
//     className="absolute bottom-[-100px]"
//     message="Success"
//     description={success}
//     type="success"
//     showIcon
//     closable
// />
// : 
// <Alert className="absolute bottom-[-100px]"
//         message="No given name"
//         description={errors}
//         type="error"
//         showIcon
//         closable
// />