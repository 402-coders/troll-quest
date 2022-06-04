import { collection, getFirestore, query } from 'firebase/firestore'
import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { firebaseApp } from '~/lib/firebase'
import GoldGlass from '../shared/components/GoldGlass'
import { Header } from '../shared/components/Header'

export const Leaderboard = () => {
    const firestore = getFirestore(firebaseApp);
    const [users]  = useCollectionData(query(collection(firestore, 'users')))
    console.log(users);
    
  return (
    <div>
        <Header>Leaderboard</Header>
        <div className="flex flex-col items-center">
            {users?.map((user, idx )=> (
                <div key={idx} className="mt-10 card w-1/2 h-20 shadow-sm flex flex-row justify-around items-center border-2">
                   <div className="avatar self-center">
        <div className="w-12 h-12 rounded-full ring ring-accent">
          <img src={user.avatar} alt="user avatar" />
        </div>
      </div>
                <p>{user.displayName}</p>
                {user.currentHero}
                <div className="flex">
                    <p className="m-2">{user.points}</p>
                    <GoldGlass />
                </div>
            </div>
           ) )}
       </div>
    </div>
  )
}
