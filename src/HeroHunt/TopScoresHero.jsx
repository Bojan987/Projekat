import React, { useEffect, useState } from 'react'
import { getScoresHeroHunt } from '../services'
import { topResultsHero } from '../utilities'

export const TopScoresHero = ()=>{
const [topScores,setTopScores] = useState([])
    useEffect(()=>{
        getScoresHeroHunt().then(res=>{
            // console.log(res.data)
            // console.log(topResultsHero(res.data))
            setTopScores(topResultsHero(res.data))
          })
    },[])
    return(
        <div>
            <ol className='linkovi'>
    {topScores.map(el=><li key={el._id}> <span>{el.username}</span> - <span>{el.heroHuntScore} seconds</span> </li>)}
            </ol>
        </div>
    )
}