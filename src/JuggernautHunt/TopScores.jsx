import React, { useEffect, useState } from 'react'
import { getScores } from '../services'
import { topResults } from '../utilities'

export const TopScores = ()=>{
const [topScores,setTopScores] = useState([])
    useEffect(()=>{
        getScores().then(res=>{
            // console.log(res.data)
            // console.log(topResults(res.data))
            setTopScores(topResults(res.data))
          })
    },[])
    return(
        <div>
            <ol>
    {topScores.map(el=><li key={el._id}> <span>{el.username}</span> - <span>{el.juggHuntScore} seconds</span> </li>)}
            </ol>
        </div>
    )
}