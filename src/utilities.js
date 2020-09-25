

export const topResults = (allRes)=>{
    let sortedRes = allRes.sort((a,b)=>a.juggHuntScore - b.juggHuntScore)
    let topTen = sortedRes.slice(0,10)
    return topTen
}
export const topResultsHero = (allRes)=>{
    let sortedRes = allRes.sort((a,b)=>a.heroHuntScore - b.heroHuntScore)
    let topTen = sortedRes.slice(0,10)
    return topTen
}
