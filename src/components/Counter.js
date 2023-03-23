import React from "react";
import { Button } from "antd";


export default function Counter({ players }) {


    return (
        <>
            <div className=" flex flex-col justify-between text-slate-600 font-extrabold">
                <p>Players: <span className="text-pink-600 text-lg">{players.length}</span></p>

                {/* total point - map players, every element and its score, and reduce function with accumulator and player params, results acumulator + player by every map
                and start from initial value, which is 0 */}
                <p>Total points: <span className="text-green-600 text-lg">{  players.map(e=>e.score).reduce(
            (accumulator, player) => accumulator + player,
            0) }</span>
            </p>
            </div>
        </>
    )
}