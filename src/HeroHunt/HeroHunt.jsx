import React, { useEffect, useState } from "react";
import {getDotainfos,postScoresHeroHunt} from "../services";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button"
import { Navigation } from "../components/Navigation";
import { useHistory } from "react-router-dom";

export const HeroHunt = () => {
  const [heroes, setHeroes] = useState([]);
  const [bounty, setBounty] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [int, setInt] = useState();
  const [time, setTime] = useState(0);
  const [scoreHunt, setScoreHunt] = useState({
    username: "",
    heroHuntScore: 0,
  });
  const [heroEliminated,setHeroEliminated] = useState('heroEliminated')
  const history = useHistory()
  const wantedArray = ['Stealing a cookie from Roshan. ','Letting the dogs out.','Unicorn poaching']
  

  const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  

  useEffect(() => {
    getDotainfos().then((res) => {
      
      setHeroes(getShuffledArr(res.data));

      setBounty(getShuffledArr(res.data).slice(0, 3));
   
    });

  }, []);
  

 

  useEffect(() => {
    setInt(
      setInterval(() => {
        
        setTime((time) => {
          return time + 1;
        });
        
      }, 1000)
    );

    
    return () => clearInterval(int);
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (isWin) {
      setScoreHunt((prev) => {
        return {
          ...prev,
          username: JSON.parse(localStorage.getItem("LoggedUser")).username,
          heroHuntScore: time,
        };
      });
      clearInterval(int);
    }
    // eslint-disable-next-line 
  }, [isWin]);

  useEffect(() => {
    if (scoreHunt.heroHuntScore !== 0) postScoresHeroHunt(scoreHunt);
  }, [scoreHunt]);

  const pickAhero = (e) => {
    

     if(bounty.some((el)=>e.target.id === el.img)){
       
       setHeroEliminated('heroShow')
       let index = bounty.findIndex((el) => e.target.id === el.img);
    
       if (bounty.filter((el, idx) => idx !== index).length === 0) setIsWin(true);
       if (index >= 0) {
         setBounty((prev) => prev.filter((el, idx) => idx !== index));
       }
       let x = setTimeout(() => {
         setHeroEliminated('heroEliminated')
       }, 1000);
       return ()=>clearTimeout(x)
     }

  
  };
    
  return (
    <div>
      <Navigation
        loggedPlayer={JSON.parse(localStorage.getItem("LoggedUser"))}
      />
      {!isWin ? (
        <Container className="HeroHunt-container">
          <Row >
              <Col className="Board-title " >
                <div className="heroHunt-title">Wanted! Dead! Not Alive</div>
                <div className="neon-blue">{time}</div>
                <p className='descriptionHunt'>Wanted heroes are hiding in hero pool. Find all three wanted heroes in hero pool and click on each to eliminate them.Once you eliminate all 3 u win.</p>
                <hr/>
              </Col>
            </Row>
          <Row className="py-4">
            
            {bounty.map((el,idx) => (
                <Col lg={4} key={el.img}>
                <Card className='wanted-card'>
                  <Card.Body className='wanted-card-content'>
                      <Image
                      key={el.img}
                      id={el.img}
                      fluid
                      className=" w-50 mb-3 wanted"
                      src={`https://api.opendota.com${el.img}`}
                      roundedCircle
                      
                      />
                      <h3>{el.localized_name}</h3>
                      <h5 className='text-danger'>Wanted!</h5>
                      <p>Wanted for: {wantedArray[idx]}</p>
             
                  </Card.Body>
                </Card>
              </Col>
              
              
            ))}
          </Row>
          <Row className='heroHuntPool'>
            <Card >
              <Card.Body className='heroPoolCard'>
                  {heroes.map((el) => (
                  <div key={el.img} className='poolWrap'>
                  <Image
                  key={el.img}
                  id={el.img}
                  className="heroImg"
                  src={`https://api.opendota.com${el.img}`}
                  roundedCircle
                  onClick={pickAhero}
                  />
                  
                   </div>
                 ))}
              </Card.Body>
              <Card.Footer>
                 <Button variant="info" block onClick={()=>history.push("/user")}>Give Up</Button>
              </Card.Footer>
            </Card>
            <p  className={heroEliminated} >Hero eliminated</p>
          </Row>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center align-items-center win-section">
            <Row>
              <span className="winner neon-blue">YOU</span>
              <span className="winner neon-blue">WIN!</span>
            </Row>
            <Row>
              <span className="winner neon-blue">Score : {time} sec</span>
              
            </Row>
              <Row>
              <Button variant="info" block onClick={()=>history.push("/user")}>Back to Home</Button>
              
              </Row>
             
        </Container>
      )}
    </div>
  );
};

