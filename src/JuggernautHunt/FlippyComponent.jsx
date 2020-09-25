import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Image from "react-bootstrap/Image";
import alive from "./game-images/jugger.png";

export const Flippycomponent = ({toggleJuggKill,isDead,resize})=>{

    const handleClick = () => {
        toggleJuggKill();
      };
    
    return <Flippy
    isFlipped={isDead}
    flipDirection="vertical"
    style={{ width: '100px', height:'100px' ,margin:'0.1rem' }}

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
        // lineHeight: "10px",
        // paddingLeft: "25px",
    
        borderRadius: "10px"
      }}
      onClick={handleClick}
    >
      <Image src={alive} rounded className="flipImage" />
    </BackSide>
  </Flippy>
}