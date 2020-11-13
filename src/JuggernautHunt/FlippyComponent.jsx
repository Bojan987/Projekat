import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";
import './flippy.css'
import Image from "react-bootstrap/Image";
import alive from "./game-images/jugger.png";

export const Flippycomponent = ({toggleJuggKill,isDead})=>{

    const handleClick = () => {
        toggleJuggKill();
      };
    
    return <Flippy
    isFlipped={isDead}
    flipDirection="vertical"
    
    className='flippyComponent'
  >
    <FrontSide
      style={{
        backgroundColor:'#51c8ec',
        
        borderRadius: "10px",
      }}
      onClick={handleClick}
    ></FrontSide>
    <BackSide
      style={{
        backgroundColor: "#076986",
        borderRadius: "10px"
      }}
      onClick={handleClick}
    >
      <Image src={alive}  className="flipImage" />
    </BackSide>
  </Flippy>
}