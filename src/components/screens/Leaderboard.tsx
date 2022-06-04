import React from 'react'
import { Header } from '../shared/components/Header'

export const Leaderboard = () => {
  return (
    <div>
        <Header>Leaderboard</Header>
        <div className="flex flex-col items-center">
        <div className="mt-10 card w-1/2 h-20 shadow-sm flex flex-row justify-around items-center border-2">
            <p>Avatar</p>
            <p>Name</p>
            <p>punkty</p>
        </div>
        <div className="mt-5 card w-1/2 h-20 shadow-sm flex flex-row justify-around items-center border-2">
            <p>Avatar</p>
            <p>Name</p>
            <p>punkty</p>
        </div>
        <div className="mt-5 card w-1/2 h-20 shadow-sm flex flex-row justify-around items-center border-2">
            <p>Avatar</p>
            <p>Name</p>
            <p>punkty</p>
        </div>
        <div className="mt-5 card w-1/2 h-20 shadow-sm flex flex-row justify-around items-center border-2">
            <p>Avatar</p>
            <p>Name</p>
            <p>punkty</p>
        </div>
        
       </div>
    </div>
  )
}
