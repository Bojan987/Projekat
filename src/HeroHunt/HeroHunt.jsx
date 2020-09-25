import React, { useEffect, useState } from "react";
import {getDotainfos,postScoresHeroHunt} from "../services";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Navigation } from "../components/Navigation";
export const HeroHunt = () => {
  const [heroes, setHeroes] = useState([]);
  const [bounty, setBouty] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [int, setInt] = useState();
  const [time, setTime] = useState(0);
  const [scoreHunt, setScoreHunt] = useState({
    username: "",
    heroHuntScore: 0,
  });

  const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  // const shuffle=(array)=>array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    getDotainfos().then((res) => {
      // console.log(res.data);
      // setHeroes(res.data.map((el) => el.img));
      setHeroes(getShuffledArr(res.data));

      setBouty(getShuffledArr(res.data).slice(0, 3));
    });
  }, []);
  //dodaj ovde refresh u dependeces

  useEffect(() => {
    setInt(
      setInterval(() => {
        // console.log(time)
        setTime((time) => {
          return time + 1;
        });
        // console.log("izvrsilo se ");
      }, 1000)
    );

    // getScoresHeroHunt().then(res=>{
    //   console.log(res)
    // })
    return () => clearInterval(int);
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
  }, [isWin]);

  useEffect(() => {
    if (scoreHunt.heroHuntScore !== 0) postScoresHeroHunt(scoreHunt);
  }, [scoreHunt]);

  const pickAhero = (e) => {
    console.log(e.target.id);

    //  if(condition.some((el)=>e.target.id === el.id))

    let index = bounty.findIndex((el) => e.target.id === el.img);
    // console.log(index);
    if (bounty.filter((el, idx) => idx !== index).length === 0) setIsWin(true);
    if (index >= 0) {
      setBouty((prev) => prev.filter((el, idx) => idx !== index));
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
              <Col className="Board-title " lg={10}>
                <div className="heroHunt-title">Wanted! Dead! Not Alive</div>
                <div className="neon-blue">{time}</div>
              </Col>
            </Row>
          <Row className="py-4">
            
            {bounty.map((el) => (
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
              <h5 className='text-muted'>Wanted!</h5>
              <p>Wanted for -napraviti neki array sa tekstovima</p>
             
                  </Card.Body>
                </Card>
              </Col>
              
              
            ))}
          </Row>
          <Row>
            {heroes.map((el) => (
              <Image
                key={el.img}
                id={el.img}
                className="heroImg"
                src={`https://api.opendota.com${el.img}`}
                roundedCircle
                onClick={pickAhero}
              />
            ))}
          </Row>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center win-section">
          
            
              <span className="winner neon-blue">YOU</span>
              <span className="winner neon-blue">WIN!</span>
              
          </Container>
      )}
    </div>
  );
};

{/* <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="img/person1.jpg" alt="" class="img-fluid rounded-circle w-50 mb-3">
              <h3>Susan Williams</h3>
              <h5 class="text-muted">Lead Writer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
              <div class="d-flex justify-content-center">
                <div class="p-4">
                  <a href="http://facebook.com">
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div class="p-4">
                  <a href="http://twitter.com">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div class="p-4">
                  <a href="http://instagram.com">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div> */}