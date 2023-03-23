import React from 'react';
import Home from './Home';
import { Button } from 'antd';
import { id } from 'ethers';

export default function Players({ data, handleScore , deletePlayer}) {

    return (<div className='rows border-t py-4 text-slate-700 font-semibold'>
        {
            data.length > 0 &&
            data.map(player => {
                return <div className="row bg-slate-200 w-full px-5 py-2">
                    <Button type='primary' className='mr-5 text-xs '  danger onClick={(e)=>{

deletePlayer(player.id);

                    }}>DEL</Button>
                    <p className="name " id={player.id}>{player.name}</p>
                    <div className="buttons  ">
                        <Button className='text-white font-extrabold' danger onClick={() => {

                            handleScore(player.id, -1);
                        }}>-</Button>
                        <p className='w-30px m-auto'>{player.score}</p>
                        <Button
                        className=' border border-green-600 text-green-500 font-extrabold'
                            onClick={(e) => {
                        
                                    e.preventDefault();
                                handleScore(player.id, 1);
                            }}
                        >+</Button>
                    </div>
                </div>
            })
        }

    </div>)


}