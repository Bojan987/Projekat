import React, { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { postScores } from "../services";
import { SingleField } from "./SingleField";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Navigation } from "../components/Navigation";
import Button from "react-bootstrap/esm/Button";
import '../App.css'
import Card from "react-bootstrap/esm/Card";

export const Table = ({ nrows, ncols, chanceJuggOnStart }) => {

  const history=useHistory()
  const createTable = () => {
    let board = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceJuggOnStart);
      }
      board.push(row);
    }

    return board;
  };
  const [initTable, setInitTable] = useState(createTable());
  const [hasWon, setHasWon] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState({ juggHuntScore: 0, username: "" });
  const [int, setInt] = useState();

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
    if (hasWon) {
      
      setScore((prev) => {
        return {
          ...prev,
          juggHuntScore: time,
          username: JSON.parse(localStorage.getItem("LoggedUser")).username,
        };
      });

      clearInterval(int);
    }
    // eslint-disable-next-line 
  }, [hasWon]);

  useEffect(() => {
    if (score.juggHuntScore !== 0) postScores(score);
  }, [score]);

  const toggleJuggKill = (coord) => {
    let board = [...initTable];
    
    let splitted = coord.split("-");
    let [x, y] = splitted.map((item) => parseInt(item));

    function toggleJugg(x, y) {
      
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    toggleJugg(y, x); //Flip initial
    toggleJugg(y, x - 1); //flip left
    toggleJugg(y, x + 1); //flip right
    toggleJugg(y - 1, x); //flip below
    toggleJugg(y + 1, x); //flip above
    let isWin = board.every((row) => row.every((cell) => !cell));
    
    setHasWon(isWin);
    setInitTable(board);
  };

  const makeTable = () => {
    let tblBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <SingleField
            key={coord}
            isDead={initTable[y][x]}
            toggleJuggKill={() => toggleJuggKill(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="Table">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  };

  return (
    <div>
      <Navigation
        loggedPlayer={JSON.parse(localStorage.getItem("LoggedUser"))}
      />
      <Container
        fluid
        style={{
          
          paddingTop:'15px'
        }}
      >
        {hasWon ? (
            <Container className="d-flex justify-content-center align-items-center win-section">
            <Row >
              <span className="winner neon-blue">YOU</span>
              <span className="winner neon-blue">WIN!</span>
            </Row>
            <Row>
              <span className="winner neon-blue">Score : {time} sec</span>
              
            </Row>
              <Row>
              <Button className='winnerButton' variant="info" block onClick={()=>history.push("/user")}>Back to Home</Button>
              
              </Row>
             
        </Container>
        ) : (
          <Container  className="juggernaut-section">
            <Row className="Board-title">
              
                <div className="neon-orange">Hunt the Juggernaut</div>
                <div className="neon-orange">Score: {time}</div>
              </Row>
            <Row className='tableRow  d-flex '>
            <Col lg={4} md={5} xs={12}  >
                <div className = 'jugg-description align-self-center'>
                  <Card className='bg-dark text-white mb-4'>
                      <Card.Title className='d-flex justify-content-center pt-4'>
                        <h3>Game Description</h3>
                      </Card.Title>
                      <Card.Body>
                        <p>Each time you click on the field, it flips itself and all fields around itself.</p>
                        <p><strong>Goal</strong> is to flip all the pieces to non-image side. In other words, kill all the illusions Jugernaut produce.</p>
                        <p><strong>Score</strong> is the time it takes to finish the goal.<strong>Hurry up!</strong></p>
                      </Card.Body>
                  </Card>
                </div>
                </Col>
              <Col lg={8} md={7} xs={12} className='tableWrapper'>
                <Card className='tableCard bg-dark ' >
                  <Card.Body className='TableBody'>
                      {makeTable()}
                  </Card.Body>
                  <Card.Footer>
                      <Button variant="info" block onClick={()=>history.push("/user")}>Give up</Button>
                  </Card.Footer>
                </Card>
                
              </Col>
              
            </Row>
          </Container>
        )}
      </Container>
    </div>
  );
};
