import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { TopScores } from "../JuggernautHunt/TopScores";
import HeroHunt from '../images/HeroHunt.jpg'
import { TopScoresHero } from "../HeroHunt/TopScoresHero";
import {Navigation} from './Navigation.jsx'
export const Home = () => {
  // const [user, setUser] = useState(userData);

  // let logedPlayer = localStorage.getItem("LoggedUser")
  //   ? JSON.parse(localStorage.getItem("LoggedUser"))
  //   : null;

  let logedPlayer = JSON.parse(localStorage.getItem("LoggedUser"));
  // console.log(logedPlayer);
  return (
    <div>
     
      <Navigation loggedPlayer={logedPlayer}/>

      <section id="JuggerHunt" bg='light' variant='light' className="text-muted py-5">
      <Container >
        <Row>
          <Col md={6} >
            <Link to="/JuggernautHunt">
              <Image
                src="https://gamestorage-9cd1.restdb.io/media/5f6939f4db00907500005fe2"
                roundedCircle
                className=" img-fluid  mb-3 "
              />
            </Link>
         </Col>

         <Col md={6}>
         <h3>Score board - TOP 10</h3>
         <TopScores/>
         </Col>


        
        </Row>
      </Container>
      </section>

      <section id="HeroHunt" className="py-5">
      <Container >
        <Row>
          <Col  md={{order:2}}>
            <Link to="/HeroHunt">
              <Image
                src={HeroHunt}
                roundedCircle
                className=" img-fluid  mb-3 "
              />
            </Link>
         </Col>

         <Col  md={{order:1}} >
         <h3 className='linkovi'>Score board - TOP 10</h3>
         <TopScoresHero />
         </Col>


          
        </Row>
      </Container>
      </section>
    </div>
  );
};
